import { Component, OnInit } from '@angular/core';
import { CellClickEvent } from '@progress/kendo-angular-grid';
import { ILanguageSelection } from 'src/app/interface/system/language/language.interface';
import { SystemLanguageService } from 'src/app/service/system/system-language/system-language.service';

@Component({
  selector: 'language-management',
  templateUrl: './language-management.component.html',
  styleUrls: ['./language-management.component.scss'],
})
export class LanguageManagementComponent  implements OnInit {
  public languageSelection: ILanguageSelection[] = [];
  private readOnly = true;

  constructor(private systemLanguage: SystemLanguageService) {}


  async ngOnInit() {
    await this.setLanguageSelection();
  }

  private async setLanguageSelection(){
    this.languageSelection = await this.systemLanguage.get();
  }

  public async onClickLanguage(selected: CellClickEvent){
    let selectedLanguageSelection: ILanguageSelection = selected.dataItem;
    let modal = this.readOnly ? await this.systemLanguage.modal.read(selectedLanguageSelection): await this.systemLanguage.modal.edit(selectedLanguageSelection);
    await modal.present();
    let result = await modal.onDidDismiss();
    if(result.data){

    }
  }

  public async onClickCreate(){
    let modal = await this.systemLanguage.modal.create();
    await modal.present();
    let result = await modal.onDidDismiss();
    if(result.data){

    }
  }
}
