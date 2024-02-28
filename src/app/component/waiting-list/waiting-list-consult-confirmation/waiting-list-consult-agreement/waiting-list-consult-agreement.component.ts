import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, combineLatestWith, map, takeUntil } from 'rxjs';
import { UserVisitShopConsentType } from 'src/app/interface';
import { WaitingListConsultService } from 'src/app/service/waiting-list/waiting-list-consult/waiting-list-consult.service';
import { WaitingListService } from 'src/app/service/waiting-list/waiting-list.service';

@Component({
  selector: 'waiting-list-consult-agreement',
  templateUrl: './waiting-list-consult-agreement.component.html',
  styleUrls: ['./waiting-list-consult-agreement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaitingListConsultAgreementComponent implements OnInit, OnChanges, OnDestroy {
  private _destroy$ = new Subject<void>();
  @Input() clientSignature!: string | null;
  @Input() clientConsent!: UserVisitShopConsentType | null;
  @Input() sessionId!: string;

  public validator$: Observable<boolean> = this._consult.validator();
  public isAvailableTime$: Observable<boolean> = this._waitingList.isAvailableTime();

  public agreement: boolean = false;
  public requesting: boolean = false;

  public disableRequestBtn$: Observable<boolean> = this.validator$.pipe(
    combineLatestWith(this.isAvailableTime$),
    map(([validatorResult, isAvailableTimeResult]) => {
      return validatorResult && isAvailableTimeResult;
    })
  );

  public isRelateToMedical$ = this._consult.isRelateToMedical$;

  constructor(
    private _consult: WaitingListConsultService,
    private _waitingList: WaitingListService,
    private _router: Router
  ) {}
  ngOnChanges(changes: SimpleChanges) {
    const signature = changes['clientSignature'];
    if (signature !== undefined && signature !== null) {
      const currentValue =
        signature.currentValue !== undefined && signature.currentValue !== null ? signature.currentValue : '';
      if (currentValue !== signature.previousValue) {
        this.clientSignature = currentValue;
      }
    }
  }

  ngOnInit() {
    this._consult
      .hasTermandConditionConsent()
      .pipe(takeUntil(this._destroy$))
      .subscribe(agreement => {
        this.agreement = agreement;
      });
  }

  public clear() {
    this.clientSignature = '';
    this._consult.updateSignature(this.clientSignature);
  }

  public async onChangeClientSignature(signature: string) {
    if (signature !== null) {
      this._consult.updateSignature(signature);
    }
  }

  public onChangeAgreement(agreed: boolean) {
    this._consult.updateAgreement(agreed);
  }
  public onChangeEmailConsent(agreed: boolean) {
    this._consult.updateEmailMarketing(agreed);
  }

  public onChangeSmsConsent(agreed: boolean) {
    this._consult.updateSmsMarketing(agreed);
  }

  public async onClickRequest() {
    if (this.sessionId !== undefined && this.sessionId !== null) {
      this._router.navigateByUrl(`waiting-list/${this.sessionId}/consult-request`);
    }
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
