import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, lastValueFrom } from 'rxjs';
import { SystemLanguageRepositoryService } from 'src/app/firebase/system-repository/language/system-language-repository.service';
import { IPairKeyValue } from 'src/app/interface';
import {
  ICreateNewPackageCommand,
  ILanguageSelection,
  ILanguageTranslateItem,
} from 'src/app/interface/system/language/language.interface';
import { SystemLanguagePackageService } from '../system-language-package/system-language-package.service';
import { TextTransformService } from 'src/app/service/global/text-transform/text-transform.service';
import { LanguageTranslateService } from 'src/app/service/global/language-translate/language-translate.service';
import { TranslateCriteriaService } from '../translate-criteria/translate-criteria.service';
import { SystemLanguageManagementService } from '../system-language-management.service';

@Injectable({
  providedIn: 'root',
})
export class SystemLanguageAddService {
  private createCommandService: BehaviorSubject<ICreateNewPackageCommand | undefined> =
    new BehaviorSubject<ICreateNewPackageCommand | undefined>(undefined);
  public status: Observable<ICreateNewPackageCommand | undefined> =
    this.createCommandService.asObservable();

  constructor(
    private languageRepo: SystemLanguageRepositoryService,
    private systemLanguage: SystemLanguageManagementService,
    private textTransform: TextTransformService,
    private translate: LanguageTranslateService,
    private criteria: TranslateCriteriaService,
    private languagePacakge: SystemLanguagePackageService
  ) {}

  public async save(command: ILanguageSelection) {
    await this.languageRepo.addNewLanguageSelection(command);
  }

  private async setCreateNewPackageCommand(
    translatedTo: string,
    code: string,
    defaultKeyPairList: IPairKeyValue[]
  ) {
    let result: ICreateNewPackageCommand = {
      code: code,
      defaultKeyPairList: defaultKeyPairList,
      currentKeyPair: defaultKeyPairList[0],
      newPackage: {},
      errorKeyPairList: [],
      translateTo: translatedTo,
      end: defaultKeyPairList.length - 1,
      current: 0,
      inProgress: false,
      endTransaction: false,
      attemptError: false,
    };
    return result;
  }

  public async receiveCreateNewPackageCommand(
    translatedTo: string,
    code: string,
    defaultKeyPairList: IPairKeyValue[]
  ) {
    let command = await this.setCreateNewPackageCommand(translatedTo, code, defaultKeyPairList);
    this.createCommandService.next(command);
  }

  public async handleTranslateCommand(command: ICreateNewPackageCommand) {
    let sendNewTransaction: boolean = !command.inProgress && !command.endTransaction;

    if (sendNewTransaction) {
      await this.sendTranslateCommand(command);
      // Wait for 1.5 second before proceeding
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.translateCurrentKeyPairValue(command);
    }
  }

  public validateCommand(command: ICreateNewPackageCommand) {
    command.attemptError = command.endTransaction
      ? command.errorKeyPairList.length > 0
      : command.attemptError;

    if (command.attemptError) {
      command.defaultKeyPairList = command.errorKeyPairList;
      command.errorKeyPairList = [];
      command.current = 0;
      command.end = command.defaultKeyPairList.length - 1;
      command.endTransaction = false;
      command.attemptError = false;
    }

    return command;
  }

  private async sendTranslateCommand(command: ICreateNewPackageCommand) {
    command.currentKeyPair = command.defaultKeyPairList[command.current];
    command.inProgress = true;
    this.createCommandService.next(command);
  }

  private failTranslate(command: ICreateNewPackageCommand) {
    command.inProgress = false;
    command.endTransaction = command.current === command.end;
    command.current = command.end !== command.current ? command.current + 1 : command.current;
    command.errorKeyPairList.push(command.currentKeyPair);
    this.createCommandService.next(command);
  }

  private async translateCurrentKeyPairValue(command: ICreateNewPackageCommand) {
    command.currentKeyPair = command.defaultKeyPairList[command.current];
    let translateCriteria = await this.criteria.addingLanguageCriteria(
      command.currentKeyPair.key,
      command.translateTo,
      command.code
    );

    let translatedResult: ILanguageTranslateItem = await this.translate.get(
      command.currentKeyPair.value,
      translateCriteria,
      false
    );

    if (!translatedResult.isEmpty) {
      this.successTranslate(command, translatedResult);
    } else {
      this.failTranslate(command);
    }
  }

  private async successTranslate(
    command: ICreateNewPackageCommand,
    translatedResult: ILanguageTranslateItem
  ) {
    console.log(command.currentKeyPair.value + ' - ' + translatedResult.translated[command.code]);
    let isUndefined: boolean = translatedResult.translated[command.code] === undefined;
    let isEmpty: boolean =
      translatedResult.translated[command.code] !== undefined
        ? translatedResult.translated[command.code].length === 0
        : true;

    if (isUndefined || isEmpty) {
      command.errorKeyPairList.push(command.currentKeyPair);
    }
    command.currentKeyPair.value =
      typeof translatedResult.translated[command.code] === 'string'
        ? translatedResult.translated[command.code]
        : command.currentKeyPair.value;
    command.newPackage = this.languagePacakge.update(command.newPackage, command.currentKeyPair);
    command.inProgress = false;
    command.endTransaction = command.current === command.end;
    command.current = command.end !== command.current ? command.current + 1 : command.current;
    command = this.validateCommand(command);

    this.createCommandService.next(command);
  }
}
