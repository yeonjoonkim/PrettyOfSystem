import { Component, OnInit } from '@angular/core';
import { NetworkConnectionStatusService } from 'src/app/service/global/network-connection-status/network-connection-status.service';

@Component({
  selector: 'app-no-internet',
  templateUrl: './no-internet.page.html',
  styleUrls: ['./no-internet.page.scss'],
})
export class NoInternetPage implements OnInit {
  constructor() {}

  async ngOnInit() {}
}
