import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language/service/language.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(public language: LanguageService) { }

  ngOnInit() {
  }

}
