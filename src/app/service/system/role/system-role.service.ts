import { RoleRateService } from '../../../shared/services/authentication/role-rate/role-rate.service';
import { DeleteConfirmationAlert } from './../../../shared/services/delete-confirmation-alert/delete-confirmation-alert.service';
import { SystemRoleRepositoryService } from './../../../firebase/system-repository/role/system-role-repository.service';
import { ToastService } from './../../../shared/services/toast/toast.service';
import { LanguageTranslationPackageService } from './../../../shared/services/language-translation-package/language-translation-package.service';
import { LanguageService } from './../../../shared/services/language/language.service';
import { IRoleConfiguration } from 'src/app/interface/system/role/role.interface';
import { RoleModalService } from 'src/app/service/system/role/role-modal/role-modal.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SystemRoleService {
  private readonly prefixedObjectName: string = 'role.name.';

  constructor(
    public modal: RoleModalService,
    private systemRoleRepo: SystemRoleRepositoryService,
    private toast: ToastService,
    private language: LanguageService,
    private deleteAlert: DeleteConfirmationAlert,
    private roleRate: RoleRateService,
    private langaugeTranslationPackage: LanguageTranslationPackageService) {}


  public subscribeSystemRepo(){
    return this.systemRoleRepo.getSystemRoleConfigurations();
  }

  public async processNewSaveRoleConfiguration(newConfig: IRoleConfiguration): Promise<void>{
    newConfig.rate = this.roleRate.getSystemRoleRateSettingByConfiguration(newConfig.accessLevel);
    let translate = await this.langaugeTranslationPackage.getLanguageTitleTrasnslationResult(this.prefixedObjectName, newConfig.description);

    if(!translate.validated.isEmpty && translate.validated.isKeyNotExisited){
      newConfig.description = translate.validated.description;
      newConfig.name = translate.validated.name.toLowerCase().replace(" ", "");
      await this.language.editLanguagePackage(translate.translatedResult, translate.validated.name);
      await this.systemRoleRepo.addSystemRoleConfiguration(newConfig);
      await this.presentSaveMsg();
      translate.validated.isSaved = true;
      this.modal.dismissModal();
    }
  }


  public async processDeleteRoleConfiguration(config: IRoleConfiguration){
    let deleteConfirmation = await this.deleteAlert.getdeleteConfirmation(config.name);

    if(deleteConfirmation){
      await this.language.deleteKeyPairValue(config.name);
      await this.systemRoleRepo.deleteSystemRoleConfiguration(config.id);
      await this.presentDeleteMsg();
    }
  }

  public async processUpdateRoleConfiguration(prevConfig: IRoleConfiguration, newConfig: IRoleConfiguration){
    newConfig.rate = this.roleRate.getSystemRoleRateSettingByConfiguration(newConfig.accessLevel);
    let translated = prevConfig.description !== newConfig.description
    ? await this.langaugeTranslationPackage.getLanguageDescriptionTrasnslationResult(this.prefixedObjectName, newConfig.description)
    : false;

    if(translated){
      newConfig.description = translated.result.description;
      newConfig.name = translated.result.name;
      await this.langaugeTranslationPackage.updateLanguageTranslationResult(prevConfig.name, translated);
      await this.systemRoleRepo.updateSystemRoleConfiguration(newConfig);
      await this.presentUpdateMsg();
      await this.modal.dismissModal();
    }
    else{
      await this.systemRoleRepo.updateSystemRoleConfiguration(newConfig);
      await this.presentUpdateMsg();
      await this.modal.dismissModal();
    }
  }

  private async presentSaveMsg(){
    let msg = await this.language.transform('message.success.save');
    await this.toast.present(msg);
  }

  private async presentDeleteMsg(){
    let msg = await this.language.transform('message.success.delete');
    await this.toast.present(msg);
  }


  private async presentUpdateMsg(){
    let msg = await this.language.transform('message.success.update');
    await this.toast.present(msg);
  }
}
