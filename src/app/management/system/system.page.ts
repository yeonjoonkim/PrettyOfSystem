import { Component, OnInit } from '@angular/core';
import { SystemModalService } from './services/system-modal-service/system-modal-service.service';
@Component({
  selector: 'app-system',
  templateUrl: './system.page.html',
  styleUrls: ['./system.page.scss'],
})

export class SystemPage implements OnInit {

  constructor(private systemModalService: SystemModalService) {
  }

  //TODO: Delete languageDcitionary Modal Open Method
  ngOnInit() {
    this.systemModalService.presentLanguageDictionary();
  }

}
