import { Injectable } from '@angular/core';
import { MassageBodyService } from './massage-body/massage-body.service';
import * as Constant from 'src/app/constant/constant';
import { NameValuePairType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class MassageService {
  public diffcultyChangePositionSelection: NameValuePairType[] = [
    {
      name: Constant.Massage.DifficultChangePosition.Description.NoProblem,
      value: Constant.Massage.DifficultChangePosition.Type.NoProblem,
    },
    {
      name: Constant.Massage.DifficultChangePosition.Description.Both,
      value: Constant.Massage.DifficultChangePosition.Type.Both,
    },
    {
      name: Constant.Massage.DifficultChangePosition.Description.FrontToBack,
      value: Constant.Massage.DifficultChangePosition.Type.FrontToBack,
    },
    {
      name: Constant.Massage.DifficultChangePosition.Description.BackToFront,
      value: Constant.Massage.DifficultChangePosition.Type.BackToFront,
    },
  ];

  public defaultDiffcultyChangePosition: NameValuePairType = {
    name: Constant.Massage.DifficultChangePosition.Description.NoProblem,
    value: Constant.Massage.DifficultChangePosition.Type.NoProblem,
  };
  constructor(public body: MassageBodyService) {}

  public getPressureRatingDescription(level: number): Constant.MassagePressureDescriptionType {
    switch (level) {
      case 1:
        return Constant.Massage.Pressure.Description.ExtremeSoft;
      case 2:
        return Constant.Massage.Pressure.Description.Soft;
      case 3:
        return Constant.Massage.Pressure.Description.Medium;
      case 4:
        return Constant.Massage.Pressure.Description.Strong;
      case 5:
        return Constant.Massage.Pressure.Description.ExtremeStrong;
      default:
        return Constant.Massage.Pressure.Description.ExtremeSoft;
    }
  }

  public getPressureRating(description: Constant.MassagePressureDescriptionType): number {
    switch (description) {
      case Constant.Massage.Pressure.Description.ExtremeSoft:
        return 1;
      case Constant.Massage.Pressure.Description.Soft:
        return 2;
      case Constant.Massage.Pressure.Description.Medium:
        return 3;
      case Constant.Massage.Pressure.Description.Strong:
        return 4;
      case Constant.Massage.Pressure.Description.ExtremeStrong:
        return 5;
      default:
        return 1;
    }
  }
}
