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

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    const onSignatureChange = changes['signature'];

    if (onSignatureChange !== undefined && onSignatureChange.currentValue !== undefined) {
      this.input = onSignatureChange.currentValue !== null ? onSignatureChange.currentValue : '';
    }
  }

  ngOnInit() {}

  onChangeInputSignature(s: string) {
    this.signature = s;
    this.signatureChange.emit(s);
  }
}
