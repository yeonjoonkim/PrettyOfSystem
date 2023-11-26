import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckInService } from 'src/app/service/check-in/check-in.service';

@Component({
  selector: 'check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent implements OnInit, OnDestroy {
  public businessName$!: Observable<string | null>;
  public logo$!: Observable<string | null>;
  public imageLoaded = false;

  constructor(private _checkIn: CheckInService) {
    this.businessName$ = this._checkIn.shop.name();
    this.logo$ = this._checkIn.shop.logo();
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
