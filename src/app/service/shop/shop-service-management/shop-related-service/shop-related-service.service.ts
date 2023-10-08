import { Injectable } from '@angular/core';
import { NameValuePairType, ShopCategoryType } from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
@Injectable({
  providedIn: 'root',
})
export class ShopRelatedServiceService {
  public massage: NameValuePairType[] = [
    {
      name: 'label.title.deeptissuemassage',
      value: Constant.MassageDescriptionType.DeepTissueMassage,
    },
    {
      name: 'label.title.hotstonemassage',
      value: Constant.MassageDescriptionType.HotStoneMassage,
    },
    {
      name: 'label.title.sportsmassage',
      value: Constant.MassageDescriptionType.SportsMassage,
    },
    {
      name: 'label.title.acupuncture',
      value: Constant.MassageDescriptionType.Acupuncture,
    },
    {
      name: 'label.title.couplesmassage',
      value: Constant.MassageDescriptionType.CouplesMassage,
    },
    {
      name: 'label.title.aromatheraphymassage',
      value: Constant.MassageDescriptionType.AromatherapyMassage,
    },
    {
      name: 'label.title.thaimassage',
      value: Constant.MassageDescriptionType.ThaiMassage,
    },
    {
      name: 'label.title.swedishmassage',
      value: Constant.MassageDescriptionType.SwedishMassage,
    },
    {
      name: 'label.title.shiatsu',
      value: Constant.MassageDescriptionType.Shiatsu,
    },
    {
      name: 'label.title.reflexology',
      value: Constant.MassageDescriptionType.Reflexology,
    },
    {
      name: 'label.title.lymphaticmassage',
      value: Constant.MassageDescriptionType.LymphaticMassage,
    },
    {
      name: 'label.title.triggerpointtheraphy',
      value: Constant.MassageDescriptionType.TriggerPointTherapy,
    },
    {
      name: 'label.title.acupressure',
      value: Constant.MassageDescriptionType.Acupressure,
    },
    {
      name: 'label.title.cuppingtherapy',
      value: Constant.MassageDescriptionType.CuppingTherapy,
    },
    {
      name: 'label.title.herbalcompressmassage',
      value: Constant.MassageDescriptionType.HerbalCompressMassage,
    },
    {
      name: 'label.title.scalpmassage',
      value: Constant.MassageDescriptionType.ScalpMassage,
    },
    {
      name: 'label.title.barefootbartherapy',
      value: Constant.MassageDescriptionType.BarefootBarTherapy,
    },
    {
      name: 'label.title.neuromusculartherapy',
      value: Constant.MassageDescriptionType.NeuromuscularTherapy,
    },
  ];

  private name = {
    massageTheraphy: 'label.title.massagetheraphy',
  };

  constructor() {}

  public getShopRelatedServiceTypes(category: ShopCategoryType) {
    if (category.name === this.name.massageTheraphy) {
      return this.massage;
    }
    return [];
  }
}
