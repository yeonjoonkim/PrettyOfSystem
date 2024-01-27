import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CryptService } from 'src/app/service/global/crypt/crypt.service';
import { GlobalService } from 'src/app/service/global/global.service';
import { ShopClientManagementService } from 'src/app/service/shop/shop-client-management/shop-client-management.service';

@Component({
  selector: 'app-shop-client-management',
  templateUrl: './shop-client-management.page.html',
  styleUrls: ['./shop-client-management.page.scss'],
})
export class ShopClientManagementPage implements OnInit {
  public isAuthorised$ = this._shopClient.isAuthorised$;

  constructor(
    private _shopClient: ShopClientManagementService,
    private _router: Router,
    private _crypt: CryptService
  ) {}

  ngOnInit() {}

  public async createNewClient(phoneNumber: string) {
    const encryptedPhone = this._crypt.encryptUrlParam(phoneNumber);
    await this._router.navigateByUrl(`shop/client-management/create/${encryptedPhone}`);
  }
}
