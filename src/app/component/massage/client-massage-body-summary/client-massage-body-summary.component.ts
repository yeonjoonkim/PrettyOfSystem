import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { MassageBodySelectorAreaType } from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
type MassageBodySummary = {
  avoid: MassageBodySelectorAreaType[];
  noPreference: MassageBodySelectorAreaType[];
  focus: MassageBodySelectorAreaType[];
  hasValue: boolean;
};

@Component({
  selector: 'client-massage-body-summary',
  templateUrl: './client-massage-body-summary.component.html',
  styleUrls: ['./client-massage-body-summary.component.scss'],
})
export class ClientMassageBodySummaryComponent implements OnInit, OnChanges {
  @Input() selectedAreas: MassageBodySelectorAreaType[] = [];
  public summary!: MassageBodySummary;
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    const selectedAreaChange: SimpleChange | undefined = changes['selectedAreas'];
    if (selectedAreaChange) {
      this.setSummary(selectedAreaChange);
    }
  }

  private setSummary(chnage: SimpleChange) {
    const area = chnage.currentValue as MassageBodySelectorAreaType[];
    this.summary = {
      hasValue: area.length > 0,
      avoid:
        area.length > 0 ? area.filter(a => a.preference.type === Constant.Massage.Body.PreferenceType.Avoid) : [],
      noPreference:
        area.length > 0
          ? area.filter(a => a.preference.type === Constant.Massage.Body.PreferenceType.NoPreference)
          : [],
      focus:
        area.length > 0 ? area.filter(a => a.preference.type === Constant.Massage.Body.PreferenceType.Focus) : [],
    };
  }
}
