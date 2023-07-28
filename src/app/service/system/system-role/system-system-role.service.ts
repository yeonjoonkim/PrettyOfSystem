import { RoleRateService } from '../../../shared/services/authentication/role-rate/role-rate.service';
import { GlobalService } from 'src/app/shared/services/global/global.service';
import { SystemRoleRepositoryService } from '../../../firebase/system-repository/role/system-role-repository.service';
import { IRoleConfiguration } from 'src/app/interface/system/role/role.interface';
import { RoleModalService } from 'src/app/service/system/system-role/role-modal/system-role-modal.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SystemRoleService {
  private readonly prefixedObjectName: string = 'role.name.';

  constructor(
    public modal: RoleModalService,
    private systemRoleRepo: SystemRoleRepositoryService,
    private global: GlobalService,
    private roleRate: RoleRateService) {}


  public subscribeSystemRepo(){
    return this.systemRoleRepo.getSystemRoleConfigurations();
  }

  public async processNewSaveRoleConfiguration(newConfig: IRoleConfiguration): Promise<void>{
    newConfig.rate = this.roleRate.getSystemRoleRateSettingByConfiguration(newConfig.accessLevel);
    let translate = await this.global.languageTranslationPackage.getLanguageTitleTrasnslationResult(this.prefixedObjectName, newConfig.description);

    if(!translate.validated.isEmpty && translate.validated.isKeyNotExisited){
      newConfig.description = translate.validated.description;
      newConfig.name = translate.validated.name.toLowerCase().replace(" ", "");
      await this.global.language.editLanguagePackage(translate.translatedResult, translate.validated.name);
      await this.systemRoleRepo.addSystemRoleConfiguration(newConfig);
      await this.presentSaveMsg();
      translate.validated.isSaved = true;
      this.modal.dismissModal();
    }
  }


  public async processDeleteRoleConfiguration(config: IRoleConfiguration){
    let deleteConfirmation = await this.global.confirmAlert.getDeleteConfirmationWithName(config.name);

    if(deleteConfirmation){
      await this.global.language.deleteKeyPairValue(config.name);
      await this.systemRoleRepo.deleteSystemRoleConfiguration(config.id);
      await this.presentDeleteMsg();
    }
  }

  public async processUpdateRoleConfiguration(prevConfig: IRoleConfiguration, newConfig: IRoleConfiguration){
    newConfig.rate = this.roleRate.getSystemRoleRateSettingByConfiguration(newConfig.accessLevel);
    let translated = prevConfig.description !== newConfig.description
    ? await this.global.languageTranslationPackage.getLanguageDescriptionTrasnslationResult(this.prefixedObjectName, newConfig.description)
    : false;

    if(translated){
      newConfig.description = translated.result.description;
      newConfig.name = translated.result.name;
      await this.global.languageTranslationPackage.updateLanguageTranslationResult(prevConfig.name, translated);
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
    let msg = await this.global.language.transform('message.success.save');
    await this.global.toast.present(msg);
  }

  private async presentDeleteMsg(){
    let msg = await this.global.language.transform('message.success.delete');
    await this.global.toast.present(msg);
  }


  private async presentUpdateMsg(){
    let msg = await this.global.language.transform('message.success.update');
    await this.global.toast.present(msg);
  }
}
