import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'action-button-header',
  templateUrl: './action-button-header.component.html',
  styleUrls: ['./action-button-header.component.scss'],
})
export class ActionButtonHeaderComponent implements OnInit {
  //Primary
  @Output() onClickPrimary = new EventEmitter<void>();
  @Input() primaryButtonLabel: string = '';
  @Input() isRequiredPrimaryButton: boolean = false;
  @Input() primaryButtonEnabled: boolean = true;
  @Input() maxWidth: number = 1000;

  //Secondary
  @Output() onClickSecondary = new EventEmitter<void>();
  @Input() secondaryButtonLabel: string = '';
  @Input() isRequiredSecondaryButton: boolean = false;
  @Input() secondaryButtonEnabled: boolean = true;

  public maxwidth: string = '1000px';

  constructor() {}

  ngOnInit() {
    this.maxwidth = `${this.maxWidth}px`;
  }

  onClickPrimaryButton() {
    this.onClickPrimary.emit();
  }

  onClickSecondaryButton() {
    this.onClickSecondary.emit();
  }
}
