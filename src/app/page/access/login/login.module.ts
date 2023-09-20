import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { LoginnModule } from 'src/app/component/user/login/login.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    LoginnModule,
    AngularFireAuthModule,
  ],
  declarations: [LoginPage],
})
export class LoginPageModule {}
