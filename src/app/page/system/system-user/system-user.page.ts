import { Component, OnInit } from '@angular/core';
import * as Constant from 'src/app/constant/constant';
import { IUserLoginOption } from 'src/app/interface/user/user.interface';
@Component({
  selector: 'app-system-user',
  templateUrl: './system-user.page.html',
  styleUrls: ['./system-user.page.scss'],
})
export class SystemUserPage implements OnInit {
  rate: Constant.RoleAccessRateType = 0;
  gender: Constant.GenderType = 'Other';
  loginOption!: IUserLoginOption;
  constructor() {}

  ngOnInit() {}
}
