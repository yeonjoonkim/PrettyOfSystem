import { Injectable } from '@angular/core';
import { LoginOptionService } from './login-option/login-option.service';
import { RegisterOptionService } from './register-option/register-option.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private loginOption: LoginOptionService, private registerOption: RegisterOptionService) {
  }
}
