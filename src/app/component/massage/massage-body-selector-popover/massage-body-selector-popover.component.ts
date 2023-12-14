import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { MassageBodySelectorPopoverProp, NameValuePairType } from 'src/app/interface';
import { MassageBodyService } from 'src/app/service/massage/massage-body/massage-body.service';

@Component({
  selector: 'app-massage-body-selector-popover',
  templateUrl: './massage-body-selector-popover.component.html',
  styleUrls: ['./massage-body-selector-popover.component.scss'],
})
export class MassageBodySelectorPopoverComponent implements OnInit {
  public prop!: MassageBodySelectorPopoverProp;

  public selectedPreference!: NameValuePairType;
  public selectedPain!: NameValuePairType;
  public painLevel: number = 1;

  constructor(
    private _navParam: NavParams,
    private _popover: PopoverController,
    public body: MassageBodyService
  ) {}

  ngOnInit() {
    const paramProp: MassageBodySelectorPopoverProp | undefined = this._navParam.get('prop');
    if (paramProp) {
      this.prop = paramProp;
      this.selectedPreference = this.body.preference.findPreference(this.prop.selector, this.prop.selectedAreas);
      this.painLevel =
        this.body.findAreaFromSelector(this.prop.selector, this.prop.selectedAreas) !== undefined
          ? (this.body.findAreaFromSelector(this.prop.selector, this.prop.selectedAreas)?.pain.level as number)
          : 1;
      this.selectedPain = this.body.pain.findFromArea(this.prop.selector, this.prop.selectedAreas);
    }
  }

  public isExistedArea() {
    const area = this.body.findAreaFromSelector(this.prop.selector, this.prop.selectedAreas);
    return area ? true : false;
  }

  public async onDismiss() {
    await this._popover.dismiss();
  }

  public async onClickEdit() {
    const areas = this.body.editArea(this.prop, this.selectedPain.name, this.painLevel, this.selectedPreference);
    await this._popover.dismiss(areas);
  }

  public async onClickDelete() {
    const areas = this.body.deleteArea(this.prop);
    await this._popover.dismiss(areas);
  }

  public async onClickAdd() {
    const areas = this.body.addNewArea(this.prop, this.selectedPain.name, this.painLevel, this.selectedPreference);
    await this._popover.dismiss(areas);
  }
}
