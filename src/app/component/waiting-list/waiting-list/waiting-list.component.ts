import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WaitingListService } from 'src/app/service/waiting-list/waiting-list.service';

@Component({
  selector: 'waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrls: ['./waiting-list.component.scss'],
})
export class WaitingListComponent implements OnInit {
  @Input() sessionId!: string;
  public businessName$!: Observable<string | null>;
  public logo$!: Observable<string | null>;
  public imageLoaded = false;

  constructor(private _waitingList: WaitingListService) {
    this.businessName$ = this._waitingList.shop.name();
    this.logo$ = this._waitingList.shop.logo();
  }

  ngOnInit() {}
}
