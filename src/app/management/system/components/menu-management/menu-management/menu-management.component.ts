import { Component, OnInit } from '@angular/core';
import { IMenuCategory } from 'src/app/interface/menu/menu.interface.service';
import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.scss'],
})

export class MenuManagementComponent implements OnInit {
  public menus = [
    {
      description: "",
      title: "menu.name.management", icon: "build-outline", index: 0,
      content: [
        {url: '/management/system', title: "menu.name.systemmanagement", icon: "code-slash-outline"},
        {url: '/management/shop', title: "menu.name.shopmanagement", icon: "bag-outline"},
        {url: '/management/user', title: "menu.name.usermangement", icon: "people-outline"},
        {url: '/management/payment', title: "menu.name.paymentmanagement", icon: "cash-outline"},
    ]}
  ];

  public menuCategories: Observable<IMenuCategory[]>;
  constructor(private systemMenuRepository: SystemMenuRepositoryService) {
    this.menuCategories = this.systemMenuRepository.getSystemMenuCategories();
  }

  async ngOnInit() {

  }

}
