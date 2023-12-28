import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  MassageDiffcultChangePositionDescriptionType,
  MassageDiffcultChangePositionType,
  MassageDifficultChangePosition,
  NameValuePairType,
} from 'src/app/interface';
import { MassageService } from 'src/app/service/massage/massage.service';

@Component({
  selector: 'massage-difficult-change-position',
  templateUrl: './massage-difficult-change-position.component.html',
  styleUrls: ['./massage-difficult-change-position.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MassageDifficultChangePositionComponent implements OnInit, OnChanges {
  @Output() positionChange = new EventEmitter<MassageDifficultChangePosition>();
  @Input() position!: MassageDifficultChangePosition;
  public selection = this._massage.diffcultyChangePositionSelection;
  public selected = this._massage.defaultDiffcultyChangePosition;

  constructor(private _massage: MassageService) {}
  ngOnChanges(changes: SimpleChanges): void {
    const positionChange = changes['position'];
    if (positionChange) {
      const currentValue: MassageDifficultChangePosition = positionChange.currentValue;
      const select = this.selection.find(
        s => s.name === currentValue.description && s.value === currentValue.type
      );
      this.selected = select !== undefined ? select : this._massage.defaultDiffcultyChangePosition;
    }
  }

  ngOnInit() {}

  onChangeSelect(select: NameValuePairType) {
    const position: MassageDifficultChangePosition = {
      type: select.value as MassageDiffcultChangePositionType,
      description: select.name as MassageDiffcultChangePositionDescriptionType,
    };
    this.positionChange.emit(position);
  }
}
