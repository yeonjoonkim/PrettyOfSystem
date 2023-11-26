import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckInService } from 'src/app/service/check-in/check-in.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  public businessName$!: Observable<string | null>;
  public logo$!: Observable<string | null>;
  public imageLoaded = false;
  constructor(private _checkIn: CheckInService) {
    this.businessName$ = this._checkIn.shop.name();
    this.logo$ = this._checkIn.shop.logo();
  }

  ngOnInit() {}
}
