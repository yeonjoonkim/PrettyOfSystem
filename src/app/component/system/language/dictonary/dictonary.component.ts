import { Component, OnInit, ViewChild } from '@angular/core';
import { IPairKeyValue } from 'src/app/interface/global/global.interface';
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
  public selectedLang: IPairKeyValue = { key: '', value: '' };
  public languageSelectionList: IPairKeyValue[] = [];
  public selectedKeyPairValueList: IPairKeyValue[] = [];
  public gridData: IPairKeyValue[] = [];
  public query: string = '';

  constructor(
    public systemLanguage: SystemLanguageService,
    private popOverCtrl: PopoverController,
    private global: GlobalService
  ) {}

  async ngOnInit() {
    await this.setLanguageSelection();
  }

  public async onChangeLanguageSelection() {
    this.selectedKeyPairValueList = await this.systemLanguage.getSelectedLanguageKeyPairValueList(
      this.selectedLang.key
    );
    this.onChangeQuery();
  }

  public async export() {
    exportToCSV(this.selectedKeyPairValueList, this.selectedLang);
  }

  public async openAddLanguageTransform(event: any): Promise<void> {
    let addLanguageTransformPopOver = await this.popOverCtrl.create({
      component: AddLanguageTransformComponent,
      event: event,
      translucent: true,
    });

    await addLanguageTransformPopOver.present();
    let result = await addLanguageTransformPopOver.onWillDismiss();
    if (result.data?.isSaved) {
      this.query = result.data.key;
      await this.setLanguageSelection();
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
      await this.global.language.management.storage.getCurrentLanguage();
    await this.global.loading.show();
    await this.global.language.management.storage.refresh().then(async () => {
      let languageSelection = await this.systemLanguage.get();
      this.languageSelectionList = await this.systemLanguage.getLanguageSelectionKeyPairValueList(
        languageSelection
      );
      let currentsystemLanguage = this.languageSelectionList.filter(s => s.key === currentLanguage);
      this.selectedLang = this.selectedLang.key ? this.selectedLang : currentsystemLanguage[0];
      await this.onChangeLanguageSelection();
      this.onChangeQuery();
      this.global.loading.dismiss();
    });
  }

  public async handleFilter(query: string) {
    let value: string = query.toLowerCase();
    let languageSelection = await this.systemLanguage.get();
    let keyPairList = await this.systemLanguage.getLanguageSelectionKeyPairValueList(
      languageSelection
    );
    this.languageSelectionList = keyPairList.filter(li => {
      return li.key.toLowerCase().includes(value) || li.value.toLowerCase().includes(value);
    });
  }
}

function exportToCSV(data: IPairKeyValue[], selectedLang: IPairKeyValue): void {
  // Convert the data to CSV format
  const convertToCSV = (objArray: IPairKeyValue[]): string => {
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
  downloadCSV(csv, selectedLang.key + '-' + selectedLang.value + '.csv');
}
