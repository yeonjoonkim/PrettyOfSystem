import { Injectable } from '@angular/core';
import { MassageBodySelectorAreaType, MassageBodySelectorType, NameValuePairType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class MassageBodyPainService {
  public title: string = 'label.title.paintype';
  public list: NameValuePairType[] = [
    { name: 'label.title.sharppain', value: 'label.title.sharppain' },
    { name: 'label.title.achingpain', value: 'label.title.achingpain' },
    { name: 'label.title.burningpain', value: 'label.title.burningpain' },
    { name: 'label.title.throbbingpain', value: 'label.title.throbbingpain' },
    { name: 'label.title.stingingpain', value: 'label.title.stingingpain' },
    { name: 'label.title.shootingpain', value: 'label.title.shootingpain' },
    { name: 'label.title.tinglingNumbness', value: 'label.title.tinglingNumbness' },
    { name: 'label.title.electricShockLikepain', value: 'label.title.electricShockLikepain' },
    { name: 'label.title.crampingpain', value: 'label.title.crampingpain' },
    { name: 'label.title.deeppain', value: 'label.title.deeppain' },
    { name: 'label.title.superficialpain', value: 'label.title.superficialpain' },
    { name: 'label.title.phantompain', value: 'label.title.phantompain' },
    { name: 'label.title.pressurepain', value: 'label.title.pressurepain' },
    { name: 'label.title.referredpain', value: 'label.title.referredpain' },
    { name: 'label.title.chronicpain', value: 'label.title.chronicpain' },
    { name: 'label.title.acutepain', value: 'label.title.acutepain' },
    { name: 'label.title.inflammatorypain', value: 'label.title.inflammatorypain' },
  ];
  constructor() {}

  public findFromArea(selector: MassageBodySelectorType, areas: MassageBodySelectorAreaType[]) {
    const area = this.findAreaFromSelector(selector, areas);

    return area
      ? { name: area.pain.name, value: area.pain.name }
      : { name: 'label.title.acutepain', value: 'label.title.acutepain' };
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
