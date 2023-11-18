import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyTransform',
})
export class CurrencyTransformPipe implements PipeTransform {
  transform(value: string | number): string {
    let num: number;

    // Convert the input to a number if it's not already
    if (typeof value === 'string') {
      num = parseFloat(value.replace(/,/g, '')); // Remove commas if present
    } else {
      num = value;
    }

    // Check if the number is valid
    if (isNaN(num)) {
      return '$0.00';
    }

    // Format the number as a string with two decimal places
    const fixedNum = num.toFixed(2);

    // Split the number into whole and decimal parts
    let parts = fixedNum.split('.');
    let whole = parts[0];
    let decimal = parts[1];

    // Insert commas into the whole part of the number
    whole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Combine whole with the decimal part
    return '$' + whole + '.' + decimal;
  }
}
