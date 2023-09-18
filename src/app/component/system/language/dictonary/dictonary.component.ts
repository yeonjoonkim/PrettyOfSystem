import { Component, OnInit, ViewChild } from '@angular/core';
import { PairKeyValueType, NameValuePairType } from 'src/app/interface/global/global.interface';
import { SystemLanguageService } from 'src/app/service/system/system-language/system-language.service';
import { AddLanguageTransformComponent } from './add-language-transform/add-language-transform.component';
import { PopoverController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global/global.service';
import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'language-dictonary',
  templateUrl: './dictonary.component.html',
  styleUrls: ['./dictonary.component.scss'],
})
export class DictonaryComponent implements OnInit {
  @ViewChild('dropdownlist')
  public dropdownlist!: DropDownListComponent;
  public selectedLang: NameValuePairType = { name: '', value: '' };
  public languageSelectionList: NameValuePairType[] = [];
  public selectedKeyPairValueList: PairKeyValueType[] = [];
  public gridData: PairKeyValueType[] = [];
  public query: string = '';
  private _isPopoverOpen: boolean = false;

  constructor(
    public systemLanguage: SystemLanguageService,
    private _popOverCtrl: PopoverController,
    private _global: GlobalService
  ) {}

  async ngOnInit() {
    await this.setLanguageSelection();
  }

  public async onChangeLanguageSelection() {
    const code = this.selectedLang.value.toString();
    this.selectedKeyPairValueList = await this.systemLanguage.getSelectedLanguageKeyPairValueList(
      code
    );
    this.onChangeQuery();
  }

  public async export() {
    await this.exportToCSV(this.selectedKeyPairValueList, this.selectedLang);
  }

  public async openAddLanguageTransform(event: any): Promise<void> {
    if (!this._isPopoverOpen) {
      this._isPopoverOpen = true;
      let addLanguageTransformPopOver = await this._popOverCtrl.create({
        component: AddLanguageTransformComponent,
        event: event,
        translucent: true,
      });

      await addLanguageTransformPopOver.present();
      let result = await addLanguageTransformPopOver.onWillDismiss();
      this._isPopoverOpen = false;
      if (result.data?.isSaved) {
        this.query = result.data.key;
        await this.setLanguageSelection();
      }
    }
  }

  public onChangeQuery() {
    this.gridData =
      this.query.length === 0
        ? this.selectedKeyPairValueList
        : this.selectedKeyPairValueList.filter(q => {
            return (
              (typeof q.key === 'string' &&
                q.key.toLowerCase().includes(this.query.toLowerCase())) ||
              (typeof q.value === 'string' &&
                q.value.toLowerCase().includes(this.query.toLowerCase()))
            );
          });
  }

  public async setLanguageSelection() {
    let currentLanguage: string =
      await this._global.language.management.storage.getCurrentLanguage();
    await this._global.loading.show();
    await this._global.language.management.storage.refresh().then(async () => {
      let languageSelection = await this.systemLanguage.get();
      const keyPairValueList = await this.systemLanguage.getLanguageSelectionKeyPairValueList(
        languageSelection
      );
      this.languageSelectionList = keyPairValueList.map(s => {
        return { name: s.value, value: s.key };
      });
      let currentsystemLanguage = this.languageSelectionList.filter(
        s => s.value === currentLanguage
      );
      this.selectedLang = this.selectedLang.value ? this.selectedLang : currentsystemLanguage[0];
      await this.onChangeLanguageSelection();
      this.onChangeQuery();
      this._global.loading.dismiss();
    });
  }

  private async exportToCSV(data: PairKeyValueType[], selectedLang: NameValuePairType) {
    await this._global.loading.show();
    // Convert the data to CSV format
    const convertToCSV = (objArray: PairKeyValueType[]): string => {
      const header = 'key,value\n';
      const rows = objArray.map(item => `"${item.key}","${item.value}"`).join('\n');
      return header + rows;
    };

    // Download the CSV
    const downloadCSV = (csv: string, filename: string): void => {
      const blob = new Blob([csv], { type: 'text/csv' });
      const a = document.createElement('a');
      a.style.display = 'none';
      document.body.appendChild(a);
      a.href = window.URL.createObjectURL(blob);
      a.download = filename;
      a.click();
      window.URL.revokeObjectURL(a.href);
      document.body.removeChild(a);
    };

    const csv = convertToCSV(data);
    downloadCSV(csv, selectedLang.value + '.csv');
    await this._global.loading.dismiss();
  }
}
