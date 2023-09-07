import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SystemLanguageRepositoryService } from 'src/app/firebase/system-repository/language/system-language-repository.service';
import { IPairKeyValue } from 'src/app/interface';
import {
  ICreateNewPackageCommand,
  ILanguageSelection,
  ILanguageTranslateItem,
  ILanguageTranslatedCriteria,
} from 'src/app/interface/system/language/language.interface';
import { SystemLanguagePackageService } from '../system-language-package/system-language-package.service';
import { TextTransformService } from 'src/app/service/global/text-transform/text-transform.service';
import { LanguageTranslateService } from 'src/app/service/global/language-translate/language-translate.service';
import { TranslateCriteriaService } from '../translate-criteria/translate-criteria.service';

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
    private packageService: SystemLanguagePackageService,
    private textTransform: TextTransformService,
    private translate: LanguageTranslateService,
    private criteria: TranslateCriteriaService
  ) {}

  public async save(command: ILanguageSelection) {
    await this.languageRepo.addNewLanguageSelection(command);
  }

  public async receiveCreateNewPackageCommand(
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

  public async handleTranslateCommand(command: ICreateNewPackageCommand) {
    let sendNewTransaction: boolean = !command.inProgress && !command.endTransaction;

    if (sendNewTransaction) {
      await this.sendTranslateCommand(command);
      // Wait for 1.5 second before proceeding
      await new Promise(resolve => setTimeout(resolve, 300));
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
    let translateCriteria = await this.criteria.allLanguageCriteria(command.currentKeyPair.key);

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
    if (
      translatedResult.translated[command.code] === undefined ||
      translatedResult.translated[command.code].length === 0
    ) {
      command.errorKeyPairList.push(command.currentKeyPair);
    }
    command.currentKeyPair.value =
      typeof translatedResult.translated[command.code] === 'string'
        ? translatedResult.translated[command.code]
        : command.currentKeyPair.value;
    command.newPackage = this.packageService.update(command.newPackage, command.currentKeyPair);
    command.inProgress = false;
    command.endTransaction = command.current === command.end;
    command.current = command.end !== command.current ? command.current + 1 : command.current;
    command = this.validateCommand(command);

    this.createCommandService.next(command);
  }
}
