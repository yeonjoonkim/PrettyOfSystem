import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'signature-input',
  templateUrl: './signature-input.component.html',
  styleUrls: ['./signature-input.component.scss'],
})
export class SignatureInputComponent implements OnInit {
  @Output() signatureChange = new EventEmitter<string>();
  @Input() readOnly: boolean = false;
  @Input()
  get signature() {
    return this.inputSignature;
  }
  set signature(str: string | null) {
    this.inputSignature = typeof str === 'string' ? str : '';
  }

  public inputSignature: string = '';
  constructor() {}

  ngOnInit() {}

  onChangeInputSignature(s: string) {
    this.signatureChange.emit(s);
  }
}
