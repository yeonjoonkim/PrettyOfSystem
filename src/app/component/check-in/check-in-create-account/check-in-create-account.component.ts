import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CheckInService } from 'src/app/service/check-in/check-in.service';

@Component({
  selector: 'check-in-create-account',
  templateUrl: './check-in-create-account.component.html',
  styleUrls: ['./check-in-create-account.component.scss'],
})
export class CheckInCreateAccountComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  private _sessionId!: string | null;
  private _phone!: string | null;
  public validatedSession: boolean = false;
  constructor(
    private _checkIn: CheckInService,
    private _route: ActivatedRoute
  ) {
    this._sessionId = this._route.snapshot.paramMap.get('id');
    this._phone = this._route.snapshot.paramMap.get('phone');
  }

  ngOnInit() {
    this._checkIn.checkInSession$.pipe(takeUntil(this._destroy$)).subscribe(async session => {
      if (!session) {
        await this._checkIn.validateCheckInSession(this._sessionId);
      } else {
        this.validatedSession = true;
      }
    });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
