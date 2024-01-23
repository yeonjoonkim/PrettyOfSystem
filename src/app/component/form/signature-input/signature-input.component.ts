import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SignatureCloseEvent, SignatureOpenEvent } from '@progress/kendo-angular-inputs';

@Component({
  selector: 'signature-input',
  templateUrl: './signature-input.component.html',
  styleUrls: ['./signature-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignatureInputComponent implements OnInit, OnChanges {
  @Output() signatureChange = new EventEmitter<string>();
  @Input() readOnly: boolean = false;
  @Input() signature!: string | null;

  public input!: string;

  constructor(private _menuCtrl: MenuController) {}
  ngOnChanges(changes: SimpleChanges): void {
    const onSignatureChange = changes['signature'];

    if (onSignatureChange !== undefined && onSignatureChange.currentValue !== undefined) {
      this.input = onSignatureChange.currentValue !== null ? onSignatureChange.currentValue : '';
    }
  }

  ngOnInit() {}

  onOpen(event: SignatureOpenEvent) {}
  onFocus() {}

  onClose(event: SignatureCloseEvent) {}

  onChangeInputSignature(s: string) {
    this.signature = s;
    this.signatureChange.emit(s);
  }
}
