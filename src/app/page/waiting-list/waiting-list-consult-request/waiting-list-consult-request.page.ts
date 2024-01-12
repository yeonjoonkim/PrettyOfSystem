import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable, combineLatestWith, takeUntil, take, filter, pairwise } from 'rxjs';
import { ClientService } from 'src/app/service/client/client.service';
import { WaitingListConsultService } from 'src/app/service/waiting-list/waiting-list-consult/waiting-list-consult.service';
import { WaitingListService } from 'src/app/service/waiting-list/waiting-list.service';

@Component({
  selector: 'app-waiting-list-consult-request',
  templateUrl: './waiting-list-consult-request.page.html',
  styleUrls: ['./waiting-list-consult-request.page.scss'],
})
export class WaitingListConsultRequestPage implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  public sessionId: string | null = this._route.snapshot.paramMap.get('id');
  public loaded$: Observable<boolean> = this._waitingList.isLoaded$;
  public isLoading$: Observable<boolean> = this._waitingList.isLoading$;
  public completed: boolean = false;
  public requesting: boolean = false;

  constructor(
    private _waitingList: WaitingListService,
    private _consultSvc: WaitingListConsultService,
    private _clientSvc: ClientService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
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
          this.requesting = true;
          const result = await this._consultSvc.sendRequest(client, consent, consult);
          this.requesting = false;
          if (result) {
            this.startValueChangeListener(consult.shopId, consult.id);
            const deleteSession =
              this.sessionId !== null ? this._waitingList.deleteSession(this.sessionId) : false;
            console.log(`Session has ${deleteSession ? 'completed' : 'not completed'}`);
            this._waitingList.completeSession();
          } else {
            await this._router.navigateByUrl(`waiting-list/${this.sessionId}/confirmation`);
          }
        }
      });
  }

  private startValueChangeListener(shopId: string, consultId: string) {
    this._consultSvc
      .valueChangeListener(shopId, consultId)
      .pipe(pairwise(), takeUntil(this._destroy$))
      .subscribe(([before, after]) => {
        console.log(before);
        console.log(after);
      });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
