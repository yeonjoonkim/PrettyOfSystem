import { Component, OnInit } from '@angular/core';
import { IMenuCategory } from 'src/app/interface/menu/menu.interface.service';
import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';
import { PopoverController } from '@ionic/angular';
import { AddMenuCategoryComponent } from '../add-menu-category/add-menu-category.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.scss'],
})

export class MenuManagementComponent implements OnInit {
  public readonly menuCategories: Observable<IMenuCategory[]> = this.systemMenuRepository.getSystemMenuCategories();
  public selectedCategory: IMenuCategory = {
    description: '',
    name: '',
    icon: '',
    content: []
  };

  constructor(private systemMenuRepository: SystemMenuRepositoryService, private popoverCtrl: PopoverController) {
  }

  async ngOnInit() {
  }

  public async presentAddMenuCategory(event: any){
    let addMenuCategory = await this.popoverCtrl.create({
      component: AddMenuCategoryComponent,
      event: event,
      translucent: true
    });

    await addMenuCategory.present();
  }

  public onClickCategory(selectedCategory: IMenuCategory){
    this.selectedCategory = selectedCategory;
    console.log(this.selectedCategory)
  }

}
