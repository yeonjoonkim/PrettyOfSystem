import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, Subject, map, pairwise, takeUntil } from 'rxjs';
import { SignatureTransferDocumentType } from 'src/app/interface';
import { SignatureTransferService } from 'src/app/service/signature-transfer/signature-transfer.service';

@Component({
  selector: 'app-signature-transfer',
  templateUrl: './signature-transfer.page.html',
  styleUrls: ['./signature-transfer.page.scss'],
})
export class SignatureTransferPage implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  public sessionId: string | null = this._route.snapshot.paramMap.get('id');
  public session$: Observable<SignatureTransferDocumentType | null> = this._transfer.session$;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _transfer: SignatureTransferService
  ) {}

  ngOnInit() {
    this.session$.pipe(pairwise(), takeUntil(this._destroy$)).subscribe(async ([before, after]) => {
      const received = before === null && after !== null;
      const changeToDeleted = before !== null && after === null;

      if (received) {
        await this._transfer.connected();
      }

      if (changeToDeleted) {
        await this._router.navigateByUrl('/booking');
      }
    });
    if (this.sessionId) {
      this._transfer.sync(this.sessionId);
    }
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
