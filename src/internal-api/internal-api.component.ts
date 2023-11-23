import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { InternalApiService } from 'src/app/service/internal-api/internal-api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'internal-api.component.html',
  styleUrls: ['internal-api.component.scss'],
})
export class InternalAPIComponent implements OnInit {
  private _url!: string;
  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _internalAPI: InternalApiService
  ) {
    this._url = this._document.location.href;
  }

  async ngOnInit() {
    await this._internalAPI.handler(this._url);
  }
}
