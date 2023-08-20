import { Component, OnInit } from '@angular/core';
import * as Constant from '../../../shared/services/global/global-constant';
@Component({
  selector: 'app-system-user',
  templateUrl: './system-user.page.html',
  styleUrls: ['./system-user.page.scss'],
})
export class SystemUserPage implements OnInit {

  gender: Constant.GenderType = "Other";
  constructor() { }

  ngOnInit() {
  }

}
