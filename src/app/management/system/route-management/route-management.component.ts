import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewRouteCategoryComponent } from './components/add-new-route-category/add-new-route-category.component';
@Component({
  selector: 'system-route-management',
  templateUrl: './route-management.component.html',
  styleUrls: ['./route-management.component.scss'],
})
export class RouteManagementComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.presentAddNewComponentModal()
  }

  /** This function is to present the add new route component as a modal */
  async presentAddNewComponentModal(){
    let addNewModal = await this.modalCtrl.create({
      component: AddNewRouteCategoryComponent
    });

    await addNewModal.present();
  }

}
