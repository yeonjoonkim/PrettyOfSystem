import { Component, OnInit } from '@angular/core';
import { IMenuCategory } from 'src/app/interface/menu/menu.interface';
import { SystemMenuRepositoryService } from 'src/app/firebase/system-repository/menu/system-menu-repository.service';
import { lastValueFrom } from 'rxjs';
import { LanguageService } from 'src/app/service/global/language/language.service';

@Component({
  selector: 'system-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.scss'],
})
export class MenuManagementComponent implements OnInit {
  public menuCategories!: IMenuCategory[];
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
      isReception: false,
    },
  };

  constructor(
    private systemMenuRepository: SystemMenuRepositoryService,
    private language: LanguageService
  ) {}

  async ngOnInit() {
    await this.setMenuCategory();
  }

  private async setMenuCategory() {
    let menuCategory = await lastValueFrom(this.systemMenuRepository.getSystemMenuCategories());
    this.menuCategories = menuCategory;
  }

  async onUpdate() {
    await this.language.refreshLanguageSelection().then(async () => {
      await this.setMenuCategory();
    });
  }
}
