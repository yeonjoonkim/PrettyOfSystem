import { Injectable } from '@angular/core';
import { UserSettingButtonService } from './user-setting-button/user-setting-button.service';

@Injectable({
  providedIn: 'root',
})
export class UserSettingService {
  constructor(public button: UserSettingButtonService) {}
}
