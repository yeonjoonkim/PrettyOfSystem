import { Pipe, PipeTransform } from '@angular/core';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

@Pipe({
  name: 'transformPhoneNumber',
})
export class PhoneNumberPipe implements PipeTransform {
  transform(phoneNumber: string): string {
    if (!phoneNumber) {
      return '';
    }

    try {
      const parsedNumber = parsePhoneNumberFromString(phoneNumber);
      return parsedNumber ? parsedNumber.formatInternational() : phoneNumber;
    } catch (error) {
      console.error(error);
      return phoneNumber;
    }
  }
}
