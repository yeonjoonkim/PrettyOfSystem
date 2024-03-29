import { Injectable } from '@angular/core';
import { MassageBodyFrontService } from './massage-body-front/massage-body-front.service';
import { MassageBodyBackService } from './massage-body-back/massage-body-back.service';
import { MassageBodySelectorPopoverService } from './massage-body-selector-popover/massage-body-selector-popover.service';
import { MassageBodyPainService } from './massage-body-pain/massage-body-pain.service';
import {
  MassageBodyPreferenceNameType,
  MassageBodyPreferenceType,
  MassageBodySelectorAreaType,
  MassageBodySelectorPopoverProp,
  MassageBodySelectorType,
  NameValuePairType,
} from 'src/app/interface';
import { MassageBodyPreferenceService } from './massage-body-preference/massage-body-preference.service';
import { cloneDeep } from 'lodash-es';
import * as Constant from 'src/app/constant/constant';
@Injectable({
  providedIn: 'root',
})
export class MassageBodyService {
  constructor(
    public front: MassageBodyFrontService,
    public back: MassageBodyBackService,
    public pain: MassageBodyPainService,
    public preference: MassageBodyPreferenceService,
    public popover: MassageBodySelectorPopoverService
  ) {}

  public addNewArea(
    prop: MassageBodySelectorPopoverProp,
    painName: string,
    painRating: Constant.MassagePainScaleRatingType,
    preference: NameValuePairType
  ) {
    const newArea: MassageBodySelectorAreaType = {
      position: prop.selector.position,
      pain: {
        scale: {
          rating: painRating,
          description: this.getPainScaleDescription(painRating),
        },
        name: painName,
      },
      preference: {
        type: preference.value as MassageBodyPreferenceType,
        name: preference.name as MassageBodyPreferenceNameType,
      },
    };
    return this.findAreaFromSelector(prop.selector, prop.selectedAreas) !== undefined
      ? prop.selectedAreas
      : [...prop.selectedAreas, newArea];
  }

  public editArea(
    prop: MassageBodySelectorPopoverProp,
    painName: string,
    painLevel: Constant.MassagePainScaleRatingType,
    preference: NameValuePairType
  ) {
    const area = this.findAreaFromSelector(prop.selector, prop.selectedAreas);
    const index = this.findIndexAreaFromSelector(prop.selector, prop.selectedAreas);
    if (area !== undefined && index !== undefined) {
      prop.selectedAreas = this.deleteArea(prop);
      const copiedProp = cloneDeep(prop);
      return this.addNewArea(copiedProp, painName, painLevel, preference);
    } else {
      return prop.selectedAreas;
    }
  }

  public deleteArea(prop: MassageBodySelectorPopoverProp) {
    return prop.selectedAreas.filter(
      s =>
        !(
          s.position.name === prop.selector.position.name &&
          s.position.positionName === prop.selector.position.positionName &&
          s.position.typeName === prop.selector.position.typeName
        )
    );
  }

  public findAreaFromSelector(selector: MassageBodySelectorType, areas: MassageBodySelectorAreaType[]) {
    const result = areas.find(
      s =>
        s.position.name === selector.position.name &&
        s.position.positionName === selector.position.positionName &&
        s.position.typeName === selector.position.typeName
    );
    return result;
  }

  public getArea(selector: MassageBodySelectorType, areas: MassageBodySelectorAreaType[]) {
    const index = this.findIndexAreaFromSelector(selector, areas);
    return index !== undefined && typeof index === 'number' ? areas[index] : null;
  }

  public findIndexAreaFromSelector(selector: MassageBodySelectorType, areas: MassageBodySelectorAreaType[]) {
    const area = this.findAreaFromSelector(selector, areas);

    if (area) {
      return areas.findIndex(
        s =>
          s.position.name === selector.position.name &&
          s.position.positionName === selector.position.positionName &&
          s.position.typeName === selector.position.typeName
      );
    } else {
      return undefined;
    }
  }

  public getPainScaleDescription(
    rating: Constant.MassagePainScaleRatingType
  ): Constant.MassagePainScaleDescriptionType {
    if (!rating) {
      return Constant.Massage.PainScale.Description.NoPain;
    } else if ([1, 2, 3, 4].includes(rating)) {
      return Constant.Massage.PainScale.Description.Mild;
    } else if ([5, 6].includes(rating)) {
      return Constant.Massage.PainScale.Description.Moderate;
    } else {
      return Constant.Massage.PainScale.Description.Severe;
    }
  }
}
