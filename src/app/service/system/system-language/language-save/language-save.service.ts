import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { SystemLanguageRepositoryService } from 'src/app/firebase/system-repository/language/system-language-repository.service';
import { IAddLanguageTransformSaveCommand, ILanguageSelection, ILanguageTranslateItem, ILanguageTranslatedCriteria } from 'src/app/interface/system/language/language.interface';
import { IPairKeyValue } from 'src/app/interface/global/global.interface';
import { GlobalService } from 'src/app/shared/services/global/global.service';
import { LanguagePackageService } from 'src/app/shared/services/global/language-package/language-package.service';
import { LanguageTranslateService } from 'src/app/shared/services/global/language-translate/language-translate.service';
import { ITextTransformObject } from 'src/app/shared/services/global/text-transform/text-transform.service';
export interface ICreateNewPackageCommand{
  code: string;
  defaultKeyPairList: IPairKeyValue[],
  newPackage: ITextTransformObject,
  errorKeyPairList: IPairKeyValue[],
  translateTo: string;
  end: number;
  current: number;
  currentKeyPair: IPairKeyValue;
  inProgress: boolean;
  endTransaction: boolean;
  attemptError: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class LanguageSaveService {
  private createCommandService: BehaviorSubject<ICreateNewPackageCommand | undefined> = new BehaviorSubject<ICreateNewPackageCommand | undefined>(undefined);
  public createCommand: Observable<ICreateNewPackageCommand | undefined> = this.createCommandService.asObservable();

  constructor(private global: GlobalService, private translate: LanguageTranslateService, private languagePackage: LanguagePackageService, private languageRepo: SystemLanguageRepositoryService) {}


  public async saveNewLanguage(command: ILanguageSelection){
    await this.languageRepo.addNewLanguageSelection(command);
  }

  public async saveNewTitleTransformValue(command: IPairKeyValue): Promise<boolean>{
    let validated: IAddLanguageTransformSaveCommand = await this.global.language.validateNewKeyPairValue(command);
    if(validated.hasValue && validated.isKeyNotExisted && validated.isTransformKeyValueFormat){
        let translateCriteria = await this.global.language.getAllLanguageTranslateCriteria();
        translateCriteria.isTitle = true;
        let result = await this.global.languageTranslate.getTranslatedLanguagePackage(command.value, translateCriteria);
        await this.updateLanguagePackage(result, command);
    }
    return validated.hasValue && validated.isKeyNotExisted && validated.isTransformKeyValueFormat;
  }

  public async receiveCreateNewPackageCommand(translatedTo: string, code: string){
    let command = await this.setCreateNewPackageCommand(translatedTo, code);
    this.createCommandService.next(command);
  }

  public async handleTranslateCommand(command: ICreateNewPackageCommand){
    let sendNewTransaction: boolean = !command.inProgress && !command.endTransaction;
    
    if(sendNewTransaction){
      await this.sendTranslateCommand(command);
      // Wait for 1.5 second before proceeding
      await new Promise(resolve => setTimeout(resolve, 300));
      await this.translateCurrentKeyPairValue(command);
    }
  }

  private async translateCurrentKeyPairValue(command: ICreateNewPackageCommand){
    command.currentKeyPair = command.defaultKeyPairList[command.current];
    let isDescriptionFormat: boolean = this.global.textTransform.isDescriptionFormat(command.currentKeyPair.value);
    let translateCriteria: ILanguageTranslatedCriteria = {code: [command.code], name: [command.translateTo],isTitle: !isDescriptionFormat};
    
    //command.currentKeyPair.value = isDescriptionFormat ? this.global.textTransform.getDescriptionFormat(translatedResult) : this.global.textTransform.getTitleFormat(translatedResult);
    let translatedResult: ILanguageTranslateItem = await this.translate.getTranslatedLanguagePackageWithOutLoading(command.currentKeyPair.value, translateCriteria);

    if(!translatedResult.isEmpty){
      this.successTranslate(command, translatedResult);
    }else{
      this.failTranslate(command);
    }
  }

  private failTranslate(command: ICreateNewPackageCommand){
    command.inProgress = false;
    command.endTransaction = command.current === command.end;
    command.current = command.end !== command.current ? command.current + 1 : command.current;
    command.errorKeyPairList.push(command.currentKeyPair);
    this.createCommandService.next(command);
  }

  private async successTranslate(command: ICreateNewPackageCommand, translatedResult: ILanguageTranslateItem){
    if(translatedResult.translated[command.code] === undefined || translatedResult.translated[command.code].length === 0){
      command.errorKeyPairList.push(command.currentKeyPair);
    }
    command.currentKeyPair.value = typeof translatedResult.translated[command.code] === "string" ? translatedResult.translated[command.code] : command.currentKeyPair.value;
    command.newPackage = this.languagePackage.updateKeyValuePackage(command.newPackage, command.currentKeyPair);
    command.inProgress = false;
    command.endTransaction = command.current === command.end;
    command.current = command.end !== command.current ? command.current + 1 : command.current;
    command = this.validateCommand(command);

    this.createCommandService.next(command);
  }

  private validateCommand(command: ICreateNewPackageCommand){
    command.attemptError = command.endTransaction ? command.errorKeyPairList.length > 0 : command.attemptError;

    if(command.attemptError){
      command.defaultKeyPairList = command.errorKeyPairList;
      command.errorKeyPairList = [];
      command.current = 0;
      command.end = command.defaultKeyPairList.length - 1;
      command.endTransaction = false;
      command.attemptError = false;
    }

    return command;
  }

  private async sendTranslateCommand(command: ICreateNewPackageCommand){
    command.currentKeyPair = command.defaultKeyPairList[command.current];
    command.inProgress = true;
    this.createCommandService.next(command);
  }

  private async setCreateNewPackageCommand(translatedTo: string, code: string){
    let defaultKeyPairList = await this.global.language.getDefaultKeyPairValueList();
    let result: ICreateNewPackageCommand = {
      code: code,
      defaultKeyPairList: defaultKeyPairList,
      currentKeyPair: defaultKeyPairList[0],
      newPackage: {},
      errorKeyPairList: [],
      translateTo: translatedTo,
      end: defaultKeyPairList.length -1,
      current: 0,
      inProgress: false,
      endTransaction: false,
      attemptError: false
    };
    return result;
  }

  private async updateLanguagePackage(result: ILanguageTranslateItem, command: IPairKeyValue): Promise<void>{
    if(!result.isEmpty){
      let sccuess = await this.global.language.transform('message.success.save');
      await this.global.language.editLanguagePackage(result, command.key.toLowerCase());
      await this.global.toast.present(sccuess);
    }
    else{
      let errorMsg = await this.global.language.transform('message.error.unsaved');
      await this.global.toast.presentError(errorMsg);
    }
  }

}
