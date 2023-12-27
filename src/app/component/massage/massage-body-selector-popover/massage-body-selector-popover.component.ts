import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import {
  MassageBodySelectorPainSacleType,
  MassageBodySelectorPopoverProp,
  NameValuePairType,
} from 'src/app/interface';
import { MassageBodyService } from 'src/app/service/massage/massage-body/massage-body.service';
import * as Constant from 'src/app/constant/constant';
@Component({
  selector: 'app-massage-body-selector-popover',
  templateUrl: './massage-body-selector-popover.component.html',
  styleUrls: ['./massage-body-selector-popover.component.scss'],
})
export class MassageBodySelectorPopoverComponent implements OnInit {
  public prop!: MassageBodySelectorPopoverProp;

  public selectedPreference!: NameValuePairType;
  public selectedPain!: NameValuePairType;
  public scale: MassageBodySelectorPainSacleType = {
    rating: Constant.Massage.PainScale.Rating.Zero,
    description: Constant.Massage.PainScale.Description.NoPain,
  };

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
      const selector = this.body.findAreaFromSelector(this.prop.selector, this.prop.selectedAreas);
      this.scale = selector !== undefined && selector.pain.scale ? selector.pain.scale : this.scale;
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
    const areas = this.body.editArea(
      this.prop,
      this.selectedPain.name,
      this.scale.rating,
      this.selectedPreference
    );
    await this._popover.dismiss(areas);
  }

  public async onClickDelete() {
    const areas = this.body.deleteArea(this.prop);
    await this._popover.dismiss(areas);
  }

  public async onClickAdd() {
    const areas = this.body.addNewArea(
      this.prop,
      this.selectedPain.name,
      this.scale.rating,
      this.selectedPreference
    );
    await this._popover.dismiss(areas);
  }

  onChangePainScaleRating() {
    this.scale.description = this.body.getPainScaleDescription(this.scale.rating);
  }
}
