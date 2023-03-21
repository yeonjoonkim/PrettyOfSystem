import { Component, OnInit } from '@angular/core';
import { IMenuCategory } from 'src/app/interface/menu/menu.interface';
import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';
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
    content: [],
    accessLevel: {
      isSystemAdmin: false,
      isAdmin: false,
      isManager: false,
      isEmployee: false,
      isReception: false
      }
  };

  constructor(private systemMenuRepository: SystemMenuRepositoryService) {
  }

  async ngOnInit() {
  }

}
