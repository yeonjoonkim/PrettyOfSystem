import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language/service/language.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(public language: LanguageService) { }

  ngOnInit() {
  }

}
