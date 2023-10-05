import { Injectable, EventEmitter } from '@angular/core';
import { PairKeyValueType } from 'src/app/interface/global/global.interface';
import { SystemLanguageManagementService } from './system-language-management/system-language-management.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  public changeLanguageAction = new EventEmitter<string>();

  constructor(public management: SystemLanguageManagementService) {}

  /** Language Change Event */
  public async onLanguageChange(language: string): Promise<void> {
    await this.management.storage.storeCurrentLanguage(language);
    this.changeLanguageAction.emit(language);
  }

  /** Retreive from language transform form key to value based on the current language package.
   * 'example.example.title' --> 'Sample Example'
   */
  public async transform(key: string): Promise<string> {
    return await this.management.transform(key);
  }

  /** This will validate new Key and Value */
  public async validateNewKeyPairValue(keyPairValue: PairKeyValueType) {
    let result = await this.management.validateKeyPairValue(keyPairValue);
    return result;
  }
}
