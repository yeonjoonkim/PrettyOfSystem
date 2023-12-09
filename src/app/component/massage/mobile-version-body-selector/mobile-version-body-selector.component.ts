import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MassageBodySelectorAreaType } from 'src/app/interface';

@Component({
  selector: 'mobile-version-body-selector',
  templateUrl: './mobile-version-body-selector.component.html',
  styleUrls: ['./mobile-version-body-selector.component.scss'],
})
export class MobileVersionBodySelectorComponent implements OnInit {
  @Output() selectedAreasChange = new EventEmitter<MassageBodySelectorAreaType[]>();
  @Input() selectedAreas: MassageBodySelectorAreaType[] = [];
  @Input() readOnly: boolean = true;

  public pages: string[] = ['label.title.front', 'label.title.back'];
  public selectedPage: string = 'label.title.front';
  constructor() {}
  ngOnInit() {}

  public onChangeAreas(areas: MassageBodySelectorAreaType[]) {
    this.selectedAreasChange.emit(areas);
  }

  public onPageChange(page: string) {
    this.selectedPage = page;
  }
}
