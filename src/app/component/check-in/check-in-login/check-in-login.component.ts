import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckInClientService } from 'src/app/service/check-in/check-in-client/check-in-client.service';

@Component({
  selector: 'check-in-login',
  templateUrl: './check-in-login.component.html',
  styleUrls: ['./check-in-login.component.scss'],
})
export class CheckInLoginComponent implements OnInit {
  public phone: string = '';
  public validator: boolean = false;
  public verifying: boolean = false;
  private _sessionId: string | null = this._routerParam.snapshot.paramMap.get('id');
  constructor(
    private _checkIn: CheckInClientService,
    private _router: Router,
    private _routerParam: ActivatedRoute
  ) {}

  ngOnInit() {}

  public async verifyingAccount() {
    this.verifying = true;
    const verification = await this._checkIn.isAccountExisting(this.phone);
    if (!verification && this._sessionId !== null) {
      this.verifying = false;
      this._router.navigateByUrl(`check-in/${this._sessionId}/create-account/${this.phone}`);
    }
  }
}
