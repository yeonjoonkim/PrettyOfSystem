import { Component, Input, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { firstValueFrom } from 'rxjs';
import { ShopConfigurationLanguagePackageType } from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'user-medical-other-condition',
  templateUrl: './user-medical-other-condition.component.html',
  styleUrls: ['./user-medical-other-condition.component.scss'],
})
export class UserMedicalOtherConditionComponent implements OnInit {
  @Input() otherStatus!: ShopConfigurationLanguagePackageType | null;
  public readOnly: boolean = true;
  public enableSaveBtn: boolean = false;
  public requesting: boolean = false;
  public translatingProp: string = '';
  public translatingPropValidator: boolean = false;

  constructor(
    private _user: UserService,
    private _global: GlobalService
  ) {}
  ngOnInit() {}

  public async onSave() {
    if (!this.requesting) {
      this.requesting = true;
      const before = await firstValueFrom(this._user.data$);
      if (before) {
        const user = cloneDeep(before);
        user.setting.medical.otherStatus = this.otherStatus;
        const updated = await this._user.updateUser(user, before);
        this.readOnly = updated ? true : false;
      }
      this.requesting = false;
    }
  }

  public async translating() {
    const prop = this._global.textTransform.preCleansingTranslateProp(this.translatingProp);
    const object = 'djaksdadasdas.dsaasda.daadasdafafa';
    const translated = await this._global.language.management.translate.translateDescriptionFormat(object, prop);
    if (!translated.result.isEmpty) {
      this.otherStatus = translated.result.translated;
      await this.onSave();
    } else {
      await this._global.toast.presentError('label.title.pleasetryagin');
    }
  }

  public async reset() {
    this.otherStatus = null;
    await this.onSave();
  }
}
