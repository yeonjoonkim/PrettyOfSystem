import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignatureTransferService } from 'src/app/service/signature-transfer/signature-transfer.service';

@Component({
  selector: 'signature-transfer-sender',
  templateUrl: './signature-transfer-sender.component.html',
  styleUrls: ['./signature-transfer-sender.component.scss'],
})
export class SignatureTransferSenderComponent implements OnInit {
  @Input() sessionId!: string | null;
  public signature = '';
  public mode: 'input' | 'upload' | 'none' = 'none';

  public isReadOnly = () => {
    return this.mode === 'upload';
  };
  constructor(
    private _transfer: SignatureTransferService,
    private _router: Router
  ) {}

  ngOnInit() {}

  public async send() {
    if (this.sessionId) {
      const sent = await this._transfer.sendSignature(this.sessionId, this.signature);
      if (sent) {
        await this._router.navigateByUrl('/booking');
      }
    }
  }

  onUpload() {
    this.mode = 'input';
  }

  public onClickUpload() {}
}
