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
import { Image } from 'image-js';

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

  public input!: string | undefined;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    const onSignatureChange = changes['signature'];

    if (onSignatureChange !== undefined && onSignatureChange.currentValue !== undefined) {
      this.input = onSignatureChange.previousValue !== onSignatureChange.currentValue ? undefined : '';
      this.input = onSignatureChange.currentValue !== null ? onSignatureChange.currentValue : '';
    }
  }

  ngOnInit() {}

  async onChangeInputSignature(s: string) {
    const signature = !s ? '' : s;
    if (!s) {
      this.input = signature;
    }
    this.signatureChange.emit(signature);
  }
}
