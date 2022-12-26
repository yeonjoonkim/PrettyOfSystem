import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ISystemPopOverActionCriteria } from '../../interfaces/system-management-pop-over.interface';
import { KeyPairValueDictionaryComponent } from '../../../../components/key-pair-value-dictionary/key-pair-value-dictionary.component';

@Injectable({
  providedIn: 'root'
})
export class SystemManagementModalService {

  constructor(private modalCtrl: ModalController, ) { }


  public async openActionModal(action: ISystemPopOverActionCriteria){
    if(action.isKeyPairValueActionSheet){
      await this.openKeyPairValueDictionary();
    }
  }

  private async openKeyPairValueDictionary(){
    let keyPairValueDictmodal = await this.modalCtrl.create({component: KeyPairValueDictionaryComponent});
    await keyPairValueDictmodal.present();
  }
}
