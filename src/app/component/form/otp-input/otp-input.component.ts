import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'otp-input',
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.scss'],
})
export class OtpInputComponent implements OnInit {
  @Output() otpChange = new EventEmitter<string>();
  @Output() validatorChange = new EventEmitter<boolean>();
  @Input() otp: string = '';
  @Input() length: number = 6;
  @Input() validator: boolean = false;

  constructor() {}

  ngOnInit() {}

  onOtpChange(otp: string) {
    this.otp = otp;
    this.validator = this.length === otp.length;
    this.validatorChange.emit(this.validator);
    this.otpChange.emit(this.otp);
  }
}
