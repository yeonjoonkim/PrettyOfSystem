import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { IPairNameValue, IPairNameValueFilterParam } from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
import { GlobalService } from 'src/app/service/global/global.service';
import { cloneDeep } from 'lodash-es';
import { PopoverController } from '@ionic/angular';
import { NamePairValueDropdownlistComponent } from './name-pair-value-dropdown-list/name-pair-value-dropdown-list.component';

@Component({
  selector: 'name-pair-value-single-selection',
  templateUrl: './name-pair-value-dropdown-single-selection.component.html',
  styleUrls: ['./name-pair-value-dropdown-single-selection.component.scss'],
})
export class NamePairValueDropdownSingleSelectionComponent implements OnInit, OnChanges {
  @Output() selectedChange = new EventEmitter<IPairNameValue>();

  @Input() componentMode: Constant.ComponentModeType = Constant.Default.ComponentMode.Form;
  @Input() selection: IPairNameValue[] = [];
  @Input() title: string = '';
  @Input() readOnly: boolean = false;
  @Input() filterable: boolean = true;
  @Input() isRequired: boolean = true;
  @Input() maxHeight: string = '150px';
  @Input()
  get selected() {
    return this.selectedSelection;
  }
  set selected(value: IPairNameValue) {
    this.selectedSelection = value;
  }

  public selectedSelection: IPairNameValue = { name: '', value: '' };
  public componetSelection: IPairNameValue[] = [];
  public queryList: IPairNameValueFilterParam[] = [];
  private isOpenStatus: boolean = false;

  constructor(private global: GlobalService, private popoverCtrl: PopoverController) {}

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    const onChangeSelection = changes['selection'];
    await this.onChangeSelection(onChangeSelection);
  }

  async ngOnInit() {
    await this.setDefaultSetting();
  }

  public async presentDropdownList(event: any) {
    const target = event.target as HTMLElement;
    const isIcon = target.className.includes('icon');
    if (!this.isOpenStatus && !this.readOnly && !isIcon) {
      this.isOpenStatus = true;
      let dropdownList = await this.getPopoverSettings(event);
      await dropdownList.present();
      await this.dismissListener(dropdownList);
    }
  }

  private async dismissListener(dropdownList: HTMLIonPopoverElement) {
    let event = await dropdownList.onWillDismiss();
    if (event?.data !== undefined) {
      this.selected = event.data?.selected;
      this.selectedChange.emit(this.selectedSelection);
    }
    this.isOpenStatus = false;
  }

  private async onChangeSelection(change: SimpleChange) {
    if (change !== undefined) {
      await this.setDefaultSetting();
    }
  }

  private async setDefaultSetting() {
    await this.setQueryList();
    await this.sortByTranslatedValue();
    await this.setComponentFilterMode();
  }

  private async getPopoverSettings(event: any) {
    return await this.popoverCtrl.create({
      component: NamePairValueDropdownlistComponent,
      event: event,
      translucent: true,
      size: 'cover',
      componentProps: {
        selected: this.selected,
        queryParams: this.queryList,
        selection: this.componetSelection,
        filterable: this.filterable,
        maxHeight: this.maxHeight,
      },
    });
  }

  private async sortByTranslatedValue() {
    this.componetSelection = this.queryList
      .sort((a, b) => a.translatedName.localeCompare(b.translatedName))
      .map(q => {
        return { name: q.name, value: q.value };
      });
  }

  private async setQueryList() {
    let copiedSelection: IPairNameValue[] = cloneDeep(this.selection);
    let promises = copiedSelection.map(async s => {
      let translatedName = await this.global.language.transform(s.name);
      let promise: IPairNameValueFilterParam = {
        name: s.name,
        value: s.value,
        translatedName: translatedName,
      };
      return promise;
    });

    let result = await Promise.all(promises);

    this.queryList = result.sort((a, b) => a.translatedName.localeCompare(b.translatedName));
  }

  private async setComponentFilterMode() {
    if (this.componentMode === Constant.Default.ComponentMode.Filter) {
      const allTextValue: string = 'label.title.all';
      const translatedText: string = await this.global.language.transform(allTextValue);
      this.componetSelection.unshift({ name: 'label.title.all', value: '' });
      this.queryList.unshift({ name: allTextValue, translatedName: translatedText, value: '' });
    }
  }
}
