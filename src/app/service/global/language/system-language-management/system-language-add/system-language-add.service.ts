import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SystemLanguageRepositoryService } from 'src/app/firebase/system-repository/language/system-language-repository.service';
import { PairKeyValueType } from 'src/app/interface';
import {
  CreateNewPackageCommandType,
  LanguageSelectionType,
  ILanguageTranslateItem,
} from 'src/app/interface/system/language/language.interface';
import { SystemLanguagePackageService } from '../system-language-package/system-language-package.service';
import { LanguageTranslateService } from 'src/app/service/global/language-translate/language-translate.service';
import { TranslateCriteriaService } from '../translate-criteria/translate-criteria.service';

@Injectable({
  providedIn: 'root',
})
export class SystemLanguageAddService {
  private _createCommandService: BehaviorSubject<CreateNewPackageCommandType | undefined> = new BehaviorSubject<
    CreateNewPackageCommandType | undefined
  >(undefined);
  public status: Observable<CreateNewPackageCommandType | undefined> = this._createCommandService.asObservable();

  constructor(
    private _languageRepo: SystemLanguageRepositoryService,
    private _translate: LanguageTranslateService,
    private _criteria: TranslateCriteriaService,
    private _languagePackage: SystemLanguagePackageService
  ) {}

  public async save(command: LanguageSelectionType) {
    await this._languageRepo.addNewLanguageSelection(command);
  }

  private async setCreateNewPackageCommand(
    translatedTo: string,
    code: string,
    defaultKeyPairList: PairKeyValueType[]
  ) {
    let result: CreateNewPackageCommandType = {
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
    defaultKeyPairList: PairKeyValueType[]
  ) {
    let command = await this.setCreateNewPackageCommand(translatedTo, code, defaultKeyPairList);
    this._createCommandService.next(command);
  }

  public async handleTranslateCommand(command: CreateNewPackageCommandType) {
    let sendNewTransaction: boolean = !command.inProgress && !command.endTransaction;

    if (sendNewTransaction) {
      await this.sendTranslateCommand(command);
      // Wait for 1.5 second before proceeding
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.translateCurrentKeyPairValue(command);
    }
  }

  public validateCommand(command: CreateNewPackageCommandType) {
    command.attemptError = command.endTransaction ? command.errorKeyPairList.length > 0 : command.attemptError;

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

  private async sendTranslateCommand(command: CreateNewPackageCommandType) {
    command.currentKeyPair = command.defaultKeyPairList[command.current];
    command.inProgress = true;
    this._createCommandService.next(command);
  }

  private failTranslate(command: CreateNewPackageCommandType) {
    command.inProgress = false;
    command.endTransaction = command.current === command.end;
    command.current = command.end !== command.current ? command.current + 1 : command.current;
    command.errorKeyPairList.push(command.currentKeyPair);
    this._createCommandService.next(command);
  }

  private async translateCurrentKeyPairValue(command: CreateNewPackageCommandType) {
    command.currentKeyPair = command.defaultKeyPairList[command.current];
    let translateCriteria = await this._criteria.addingLanguageCriteria(
      command.currentKeyPair.key,
      command.translateTo,
      command.code
    );

    let translatedResult: ILanguageTranslateItem = await this._translate.get(
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

  private async successTranslate(command: CreateNewPackageCommandType, translatedResult: ILanguageTranslateItem) {
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
    command.newPackage = this._languagePackage.update(command.newPackage, command.currentKeyPair);
    command.inProgress = false;
    command.endTransaction = command.current === command.end;
    command.current = command.end !== command.current ? command.current + 1 : command.current;
    command = this.validateCommand(command);

    this._createCommandService.next(command);
  }
}
