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
      value: Constant.Massage.Description.DeepTissueMassage,
    },
    {
      name: 'label.title.remedialmassage',
      value: Constant.Massage.Description.RemedialMassage,
    },
    {
      name: 'label.title.footmassage',
      value: Constant.Massage.Description.FootMassage,
    },
    {
      name: 'label.title.spamassage',
      value: Constant.Massage.Description.SpaMassage,
    },
    {
      name: 'label.title.hotstonemassage',
      value: Constant.Massage.Description.HotStoneMassage,
    },
    {
      name: 'label.title.sportsmassage',
      value: Constant.Massage.Description.SportsMassage,
    },
    {
      name: 'label.title.acupuncture',
      value: Constant.Massage.Description.Acupuncture,
    },
    {
      name: 'label.title.couplesmassage',
      value: Constant.Massage.Description.CouplesMassage,
    },
    {
      name: 'label.title.aromatheraphymassage',
      value: Constant.Massage.Description.AromatherapyMassage,
    },
    {
      name: 'label.title.thaimassage',
      value: Constant.Massage.Description.ThaiMassage,
    },
    {
      name: 'label.title.swedishmassage',
      value: Constant.Massage.Description.SwedishMassage,
    },
    {
      name: 'label.title.shiatsu',
      value: Constant.Massage.Description.Shiatsu,
    },
    {
      name: 'label.title.reflexology',
      value: Constant.Massage.Description.Reflexology,
    },
    {
      name: 'label.title.lymphaticmassage',
      value: Constant.Massage.Description.LymphaticMassage,
    },
    {
      name: 'label.title.triggerpointtheraphy',
      value: Constant.Massage.Description.TriggerPointTherapy,
    },
    {
      name: 'label.title.acupressure',
      value: Constant.Massage.Description.Acupressure,
    },
    {
      name: 'label.title.cuppingtherapy',
      value: Constant.Massage.Description.CuppingTherapy,
    },
    {
      name: 'label.title.herbalcompressmassage',
      value: Constant.Massage.Description.HerbalCompressMassage,
    },
    {
      name: 'label.title.scalpmassage',
      value: Constant.Massage.Description.ScalpMassage,
    },
    {
      name: 'label.title.barefootbartherapy',
      value: Constant.Massage.Description.BarefootBarTherapy,
    },
    {
      name: 'label.title.neuromusculartherapy',
      value: Constant.Massage.Description.NeuromuscularTherapy,
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
