import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, skip, takeUntil } from 'rxjs';
import { CheckInService } from 'src/app/service/check-in/check-in.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.page.html',
  styleUrls: ['./check-in.page.scss'],
})
export class CheckInPage implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  private _sessionId: string | null = this._route.snapshot.paramMap.get('id');
  constructor(
    private _checkIn: CheckInService,
    private _route: ActivatedRoute
  ) {}

  async ngOnInit() {
    await this.validateSessionId();
  }

  private async validateSessionId() {
    if (this._sessionId !== null) {
      await this._checkIn.validateCheckInSession(this._sessionId);
    } else {
      await this._checkIn.invalidSessionId();
    }
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
