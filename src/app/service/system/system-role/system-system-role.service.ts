import { RoleRateService } from '../../authentication/role-rate/role-rate.service';
import { GlobalService } from 'src/app/service/global/global.service';
import { SystemRoleRepositoryService } from 'src/app/firebase/system-repository/role/system-role-repository.service';
import { RoleConfigurationType } from 'src/app/interface/system/role/role.interface';
import { RoleModalService } from 'src/app/service/system/system-role/role-modal/system-role-modal.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SystemRoleService {
  private readonly _prefixedObjectName: string = 'role.title.';

  constructor(
    public modal: RoleModalService,
    private _systemRoleRepo: SystemRoleRepositoryService,
    private _global: GlobalService,
    private roleRate: RoleRateService
  ) {}

  public getAllRoles() {
    return this._systemRoleRepo.getRoleConfigurations();
  }

  private async selectedRole(configId: string) {
    return await this._systemRoleRepo.getSelectedSystemRole(configId);
  }

  public valueChangeListener() {
    return this._systemRoleRepo.valueChangeListener();
  }

  public async processNewSaveRoleConfiguration(newConfig: RoleConfigurationType): Promise<void> {
    newConfig.rate = this.roleRate.getSystemRoleRateSettingByConfiguration(newConfig.accessLevel);
    let translate = await this._global.language.management.translate.translateObjectNameFormat(
      this._prefixedObjectName,
      newConfig.description
    );

    if (!translate.result.isEmpty && translate.validated.isKeyNotExisited) {
      newConfig.description = translate.validated.description;
      newConfig.name = translate.validated.name.toLowerCase().replace(' ', '');
      await this._global.language.management.addPackage(translate.result, translate.validated.name);
      await this._systemRoleRepo.addSystemRoleConfiguration(newConfig);
      await this.presentSaveMsg();
      translate.validated.isSaved = true;
      this.modal.dissmissModalWithRefresh();
    }
  }

  public async processDeleteRoleConfiguration(config: RoleConfigurationType) {
    let deleteConfirmation = await this._global.confirmAlert.getDeleteConfirmationWithName(
      config.name
    );

    if (deleteConfirmation) {
      let selectedRole = await this.selectedRole(config.id);
      if (selectedRole !== undefined) {
        await this._global.language.management.deletePackage(selectedRole.name).then(async () => {
          await this._systemRoleRepo.deleteSystemRoleConfiguration(config.id);
          await this.presentDeleteMsg();
        });
      }
    }
  }

  public async processUpdateRoleConfiguration(
    prevConfig: RoleConfigurationType,
    newConfig: RoleConfigurationType
  ) {
    newConfig.rate = this.roleRate.getSystemRoleRateSettingByConfiguration(newConfig.accessLevel);
    let needTranslate = prevConfig.description !== newConfig.description;

    if (needTranslate) {
      let selectedPreviousRole = await this.selectedRole(prevConfig.id);
      if (selectedPreviousRole !== undefined) {
        let translated = await this._global.language.management.translate.translateObjectNameFormat(
          this._prefixedObjectName,
          newConfig.description
        );
        newConfig.description = translated.validated.description;
        newConfig.name = translated.validated.name;
        let keyValue =
          this._prefixedObjectName +
          this._global.textTransform
            .getDefaultLanguageTranslateResult(translated.result.translated)
            .toLowerCase()
            .replace(/\s+/g, '');

        await this._global.language.management
          .deletePackage(selectedPreviousRole.name)
          .then(async () => {
            await this._global.language.management.addPackage(translated.result, keyValue);
            await this._systemRoleRepo.updateSystemRoleConfiguration(newConfig);
            await this.presentUpdateMsg();
            await this.modal.dissmissModalWithRefresh();
          });
      }
    } else {
      await this._systemRoleRepo.updateSystemRoleConfiguration(newConfig);
      await this.presentUpdateMsg();
      await this.modal.dismissModal();
    }
  }

  private async presentSaveMsg() {
    let msg = await this._global.language.transform('messagesuccess.title.save');
    await this._global.toast.present(msg);
  }

  private async presentDeleteMsg() {
    let msg = await this._global.language.transform('messagesuccess.title.delete');
    await this._global.toast.present(msg);
  }

  private async presentUpdateMsg() {
    let msg = await this._global.language.transform('messagesuccess.title.update');
    await this._global.toast.present(msg);
  }
}
