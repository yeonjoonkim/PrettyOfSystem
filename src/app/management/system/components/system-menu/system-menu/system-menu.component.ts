import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'system-menu',
  templateUrl: './system-menu.component.html',
  styleUrls: ['./system-menu.component.scss'],
})
export class SystemMenuComponent implements OnInit {
  public isSystemMenuOpen: boolean = false;

  constructor() { }

  ngOnInit() {}

  public onClickSystemMenu(): void{
    this.isSystemMenuOpen = !this.isSystemMenuOpen;
  }

}
