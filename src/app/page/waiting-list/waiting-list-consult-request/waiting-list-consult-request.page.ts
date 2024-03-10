import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable, combineLatestWith, takeUntil, take, filter, BehaviorSubject } from 'rxjs';
import { ClientService } from 'src/app/service/client/client.service';
import { WaitingListConsultService } from 'src/app/service/waiting-list/waiting-list-consult/waiting-list-consult.service';
import { WaitingListService } from 'src/app/service/waiting-list/waiting-list.service';
import * as Constant from 'src/app/constant/constant';

@Component({
  selector: 'app-waiting-list-consult-request',
  templateUrl: './waiting-list-consult-request.page.html',
  styleUrls: ['./waiting-list-consult-request.page.scss'],
})
export class WaitingListConsultRequestPage implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  public sessionId: string | null = this._route.snapshot.paramMap.get('id');
  private _specialist = new BehaviorSubject<string | null>(null);
  private _status = new BehaviorSubject<Constant.Consult.StatusType | null>(null);
  private _startTime = new BehaviorSubject<string | null>(null);
  private _endTime = new BehaviorSubject<string | null>(null);

  public status$ = this._status.asObservable();
  public loaded$: Observable<boolean> = this._waitingList.isLoaded$;
  public isLoading$: Observable<boolean> = this._waitingList.isLoading$;

  get status() {
    return this._status.getValue();
  }

  set status(value: Constant.Consult.StatusType | null) {
    this._status.next(value);
  }

  get specialist() {
    return this._specialist.getValue();
  }

  set specialist(value: string | null) {
    this._specialist.next(value);
  }

  get startTime() {
    return this._startTime.getValue();
  }

  set startTime(value: string | null) {
    this._startTime.next(value);
  }

  get endTime() {
    return this._endTime.getValue();
  }

  set endTime(value: string | null) {
    this._endTime.next(value);
  }

  constructor(
    private _waitingList: WaitingListService,
    private _consultSvc: WaitingListConsultService,
    private _clientSvc: ClientService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {}

  private startValueChangeListener(shopId: string, consultId: string) {
    this._consultSvc
      .valueChangeListener(shopId, consultId)
      .pipe(takeUntil(this._destroy$))
      .subscribe(consult => {
        this.status = consult !== null ? consult.status : null;
        this.specialist = consult !== null ? consult.associatedEmployee.name : null;
        this.startTime = consult !== null && consult.scheduled !== null ? consult.scheduled.startDateTime : null;
        this.endTime = consult !== null && consult.scheduled !== null ? consult.scheduled.endDateTime : null;
      });
  }

  ionViewWillEnter() {
    this._waitingList.start$
      .pipe(combineLatestWith(this._waitingList.client.isLoggedin$), takeUntil(this._destroy$))
      .subscribe(async ([start, login]) => {
        const hasSessionId: boolean = typeof this.sessionId === 'string';
        const navigateToWaitingList = !start && !login && hasSessionId;
        const validateSession = !start && login && hasSessionId;
        if (!hasSessionId) {
          this._router.navigateByUrl(`booking`);
        }
        if (navigateToWaitingList) {
          this._router.navigateByUrl(`waiting-list/${this.sessionId}`);
        }
        if (validateSession) {
          await this._waitingList.validateSession(this.sessionId);
        }
      });
    this._waitingList.start$
      .pipe(
        combineLatestWith(
          this._clientSvc.info$,
          this._consultSvc.consult$,
          this._consultSvc.consent$,
          this._consultSvc.validator()
        ),
        filter(
          ([loaded, client, consult, consent, validator]) =>
            typeof loaded === 'boolean' &&
            client !== null &&
            consult !== null &&
            consent !== null &&
            loaded &&
            typeof validator === 'boolean' &&
            validator
        ),
        take(1)
      )
      .subscribe(async ([_, client, consult, consent, __]) => {
        if (client !== null && consult !== null && consent !== null) {
          const result = await this._consultSvc.sendRequest(client, consent, consult);
          if (result) {
            const deleteSession =
              this.sessionId !== null ? this._waitingList.deleteSession(this.sessionId) : false;
            console.log(`Session has ${deleteSession ? 'completed' : 'not completed'}`);
            this._waitingList.completeSession();
            this.startValueChangeListener(consult.shopId, consult.id);
          } else {
            await this._router.navigateByUrl(`waiting-list/${this.sessionId}/confirmation`);
          }
        }
      });
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
