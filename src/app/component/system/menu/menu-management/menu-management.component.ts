import { Component, OnInit } from '@angular/core';
import { MenuCategoryType } from 'src/app/interface/menu/menu.interface';
import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';
import { lastValueFrom } from 'rxjs';
import { LanguageService } from 'src/app/service/global/language/language.service';

@Component({
  selector: 'system-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.scss'],
})
export class MenuManagementComponent implements OnInit {
  public menuCategories!: MenuCategoryType[];
  public selectedCategory: MenuCategoryType = {
    description: '',
    name: '',
    icon: '',
    content: [],
    accessLevel: {
      isSystemAdmin: false,
      isAdmin: false,
      isManager: false,
      isEmployee: false,
      isReception: false,
    },
  };

  constructor(
    private _systemMenuRepository: SystemMenuRepositoryService,
    private _language: LanguageService
  ) {}

  async ngOnInit() {
    await this.seMenuCategoryType();
  }

  private async seMenuCategoryType() {
    let menuCategory = await lastValueFrom(this._systemMenuRepository.getSystemMenuCategories());
    this.menuCategories = menuCategory;
  }

  async onUpdate() {
    await this._language.management.storage.refresh().then(async () => {
      await this.seMenuCategoryType();
    });
  }
}
