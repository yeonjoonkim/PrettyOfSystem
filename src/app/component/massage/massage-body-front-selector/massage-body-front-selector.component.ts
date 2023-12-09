import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MassageBodySelectorAreaType, MassageBodySelectorType } from 'src/app/interface';
import { MassageBodyService } from 'src/app/service/massage/massage-body/massage-body.service';
import * as Constant from 'src/app/constant/constant';
@Component({
  selector: 'massage-body-front-selector',
  templateUrl: './massage-body-front-selector.component.html',
  styleUrls: ['./massage-body-front-selector.component.scss'],
})
export class MassageBodyFrontSelectorComponent implements OnInit {
  @Output() selectedAreasChange = new EventEmitter<MassageBodySelectorAreaType[]>();
  @Input() selectedAreas: MassageBodySelectorAreaType[] = [];
  @Input() readOnly: boolean = true;
  @Input() isReport: boolean = false;

  constructor(public body: MassageBodyService) {}

  ngOnInit() {}

  public classes(position: MassageBodySelectorType) {
    const area = this.body.getArea(position, this.selectedAreas);
    let classList: string = '';
    classList = !this.readOnly ? (classList += 'enable-hover') : classList;
    if (area && !this.isReport) {
      classList =
        area.preference.type === Constant.Massage.Body.PreferenceType.NoPreference
          ? (classList += ' no-preference')
          : area.preference.type === Constant.Massage.Body.PreferenceType.Avoid
          ? (classList += ' avoid')
          : area.preference.type === Constant.Massage.Body.PreferenceType.Focus
          ? (classList += ' focus')
          : classList;
    } else if (area && !this.isReport) {
      classList = classList += ' avoid';
    }

    return classList;
  }

  public async onClick(selector: MassageBodySelectorType) {
    if (!this.readOnly) {
      const popover = await this.body.popover.create({
        selector: selector,
        selectedAreas: this.selectedAreas,
      });
      await popover.present();
      const result = await this.body.popover.handleDismiss(popover);
      if (result) {
        this.selectedAreasChange.emit(result);
      }
    }
  }
}
