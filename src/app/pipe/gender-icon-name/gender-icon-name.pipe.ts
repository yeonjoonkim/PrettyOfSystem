import { Pipe, PipeTransform } from '@angular/core';
import { GenderType } from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';

@Pipe({
  name: 'genderIconName',
})
export class GenderIconNamePipe implements PipeTransform {
  transform(value: GenderType): string {
    switch (value) {
      case Constant.Default.Gender.Male:
        return 'male';
      case Constant.Default.Gender.Female:
        return 'female';
      default:
        return 'male-female';
    }
  }
}
