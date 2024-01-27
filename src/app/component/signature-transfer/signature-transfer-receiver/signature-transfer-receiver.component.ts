import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Subject, firstValueFrom, takeUntil } from 'rxjs';
import { GlobalService } from 'src/app/service/global/global.service';
import { SignatureTransferService } from 'src/app/service/signature-transfer/signature-transfer.service';
import * as Constant from 'src/app/constant/constant';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'signature-transfer-receiver',
  templateUrl: './signature-transfer-receiver.component.html',
  styleUrls: ['./signature-transfer-receiver.component.scss'],
})
export class SignatureTransferReceiverComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  private _prefix = this._global.currentDomain();

  protected url!: string;
  protected loaded = signal<boolean>(false);

  constructor(
    public transfer: SignatureTransferService,
    private _global: GlobalService,
    private _popover: PopoverController
  ) {}

  async ngOnInit() {
    this.transfer.session$.pipe(takeUntil(this._destroy$)).subscribe(async session => {
      if (session) {
        this.url = `${this._prefix}/signature-transfer/${session.id}`;
        this.loaded.set(true);
        await this.handleByStatus(session.status);
      }
    });
  }

  private async handleByStatus(status: Constant.SignatureTransferStatusType) {
    if (status === Constant.SignatureTransferStatus.Sending) {
      const signature = await firstValueFrom(this.transfer.siganture$);
      if (signature !== null) {
        await this._popover.dismiss(signature);
      }
    }
  }

  async copyText() {
    const msg = await this._global.language.transform('label.title.copied');
    await navigator.clipboard.writeText(this.url);
    await this._global.toast.present(msg);
  }

  async ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
