import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MassageBodySelectorAreaType } from 'src/app/interface';

@Component({
  selector: 'desktop-version-body-selector',
  templateUrl: './desktop-version-body-selector.component.html',
  styleUrls: ['./desktop-version-body-selector.component.scss'],
})
export class DesktopVersionBodySelectorComponent implements OnInit {
  @Output() selectedAreasChange = new EventEmitter<MassageBodySelectorAreaType[]>();
  @Input() selectedAreas: MassageBodySelectorAreaType[] = [];
  @Input() readOnly: boolean = true;
  @Input() isReport: boolean = true;
  constructor() {}
  ngOnInit() {}

  public onChangeAreas(areas: MassageBodySelectorAreaType[]) {
    this.selectedAreasChange.emit(areas);
  }
}
