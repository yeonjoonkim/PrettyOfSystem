import { Injectable } from '@angular/core';
import { MassageBodySelectorAreaType, MassageBodySelectorType, NameValuePairType } from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
@Injectable({
  providedIn: 'root',
})
export class MassageBodyPreferenceService {
  public title: string = 'label.title.preference';
  public list: NameValuePairType[] = [
    {
      name: Constant.Massage.Body.PreferenceName.NoPreference,
      value: Constant.Massage.Body.PreferenceType.NoPreference,
    },
    {
      name: Constant.Massage.Body.PreferenceName.Avoid,
      value: Constant.Massage.Body.PreferenceType.Avoid,
    },
    {
      name: Constant.Massage.Body.PreferenceName.Focus,
      value: Constant.Massage.Body.PreferenceType.Focus,
    },
  ];
  public defaultValue: NameValuePairType = {
    name: Constant.Massage.Body.PreferenceName.Focus,
    value: Constant.Massage.Body.PreferenceType.Focus,
  };
  constructor() {}

  public findPreference(selector: MassageBodySelectorType, areas: MassageBodySelectorAreaType[]) {
    const area = this.findAreaFromSelector(selector, areas);

    const preference =
      area !== undefined ? this.list.find(s => s.name === area.preference.name) : this.defaultValue;
    return preference !== undefined ? preference : this.defaultValue;
  }

  private findAreaFromSelector(selector: MassageBodySelectorType, areas: MassageBodySelectorAreaType[]) {
    const result = areas.find(
      s =>
        s.position.name === selector.position.name &&
        s.position.positionName === selector.position.positionName &&
        s.position.typeName === selector.position.typeName
    );
    return result;
  }
}
