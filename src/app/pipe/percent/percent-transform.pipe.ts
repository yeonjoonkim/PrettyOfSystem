import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentTransform',
})
export class PercentTransformPipe implements PipeTransform {
  transform(value: string | number) {
    const number = typeof value === 'string' ? Number(value) : value;
    return number > 1 ? `${number}%` : `${number * 100}%`;
  }
}
