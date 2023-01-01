import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-system',
  templateUrl: './system.page.html',
  styleUrls: ['./system.page.scss'],
})

export class SystemPage implements OnInit {

  constructor(private popOverCtrl: PopoverController) {
  }

  ngOnInit() {
  }
}
