import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {
  ISystemMenuOptionAction,
  SystemMenuOptionControllerService,
} from 'src/app/service/system/system-menu/system-menu-option/system-menu-option-controller.service';

@Component({
  selector: 'app-system-language',
  templateUrl: './system-language.page.html',
  styleUrls: ['./system-language.page.scss'],
})
export class SystemLanguagePage implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  public selectedSystemMenu: ISystemMenuOptionAction =
    this._systemMenuOptionCtrl.setDefaultSystemMenuOptionController();
  public systemMenu: ISystemMenuOptionAction[] = [];

  constructor(private _systemMenuOptionCtrl: SystemMenuOptionControllerService) {}

  async ngOnInit() {}

  private async setDefaultSystemMenuOption() {
    this.systemMenu = await this._systemMenuOptionCtrl.getSystemLanguageButtons();
  }

  /** This will process the set up the selected system menu */
  public async processSystemMenuOption(option: ISystemMenuOptionAction) {
    this.selectedSystemMenu = option;
  }

  async ionViewWillEnter() {
    await this.setDefaultSystemMenuOption();
  }

  ionViewWillLeave() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
