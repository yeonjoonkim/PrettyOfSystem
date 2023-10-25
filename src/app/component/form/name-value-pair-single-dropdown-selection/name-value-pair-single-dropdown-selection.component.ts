import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NameValuePairType, PairNameValueTypeFilterParamType } from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
import { GlobalService } from 'src/app/service/global/global.service';
import { cloneDeep } from 'lodash-es';
import { PopoverController } from '@ionic/angular';
import { NameValuePairSingleDropdownlistComponent } from './name-value-pair-single-dropdown-list/name-value-pair-single-dropdown-list.component';

@Component({
  selector: 'name-value-pair-single-dropdown-selection',
  templateUrl: './name-value-pair-single-dropdown-selection.component.html',
  styleUrls: ['./name-value-pair-single-dropdown-selection.component.scss'],
})
export class NameValuePairSingleDropdownSelectionComponent
  implements OnInit, OnChanges, AfterViewInit
{
  @ViewChild('dropdownListBtn') dropdownListBtn!: ElementRef;
  @ViewChild('selectedName') selectedName!: ElementRef;
  @ViewChild('dropDownArrow') dropDownArrow!: ElementRef;

  @Output() selectedChange = new EventEmitter<NameValuePairType>();

  @Input() componentMode: Constant.ComponentModeType = Constant.Default.ComponentMode.Form;
  @Input() selection: NameValuePairType[] = [];
  @Input() title: string = '';
  @Input() readOnly: boolean = false;
  @Input() isRequiredTitle: boolean = true;
  @Input() filterable: boolean = true;
  @Input() orderByName: boolean = true;
  @Input() isRequired: boolean = false;
  @Input() maxHeight: string = '150px';
  @Input()
  get selected(): NameValuePairType | undefined {
    return this.selectedSelection;
  }
  set selected(value: NameValuePairType | undefined) {
    this.selectedSelection = value;
    if (value !== undefined && this.selectedSelection?.value !== value.value) {
      this.selectedChange.emit(value);
    }
  }

  public selectedSelection!: NameValuePairType | undefined;
  public componetSelection: NameValuePairType[] = [];
  public queryList: PairNameValueTypeFilterParamType[] = [];
  public isOpenStatus: boolean = false;
  public loading: boolean = true;

  constructor(
    private _global: GlobalService,
    private _popoverCtrl: PopoverController,
    private _renderer: Renderer2
  ) {}

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    const onChangeSelection = changes['selection'];
    await this.onChangeSelection(onChangeSelection);
  }

  async ngOnInit() {}

  ngAfterViewInit() {
    this.setupEventListeners();
  }

  private setupEventListeners() {
    if (this.dropdownListBtn && this.selectedName) {
      // Handle button click event separately
      this._renderer.listen(this.dropdownListBtn.nativeElement, 'click', (event: Event) => {
        this.handleButtonClick(event);
      });

      this._renderer.listen(this.dropDownArrow.nativeElement, 'click', (event: Event) => {
        event.preventDefault();
        event.stopPropagation();
        this.dropdownListBtn.nativeElement.click();
      });

      this._renderer.listen(this.selectedName.nativeElement, 'click', (event: Event) => {
        event.preventDefault();
        event.stopPropagation();
        this.dropdownListBtn.nativeElement.click();
      });
    }
  }

  private async handleButtonClick(event: Event) {
    await this.presentDropdownList(event);
  }

  private async presentDropdownList(event: any) {
    if (!this.isOpenStatus && !this.readOnly && !this.loading) {
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
    await this.setLoaded();
  }

  private async setLoaded() {
    this.loading = this.selection?.length > 0 ? false : true;
    let isRequired = this.selectedSelection === undefined && this.isRequired;
    if (isRequired || (this.isRequired && this.selectedSelection?.value.length === 0)) {
      this.selectedSelection = { name: 'messageerror.description.dropdownoptions', value: '' };
    }
  }

  private async getPopoverSettings(event: any) {
    return await this._popoverCtrl.create({
      component: NameValuePairSingleDropdownlistComponent,
      event: event,
      translucent: true,
      size: 'cover',
      componentProps: {
        selected: this.selected,
        queryParams: this.queryList,
        selection: this.componetSelection,
        filterable: this.filterable,
        maxHeight: this.maxHeight,
        orderByName: this.orderByName,
      },
    });
  }

  private async sortByTranslatedValue() {
    this.componetSelection = this.queryList
      .sort((a, b) => (this.orderByName ? a.translatedName.localeCompare(b.translatedName) : 0))
      .map(q => {
        return { name: q.name, value: q.value };
      });
  }

  private async setQueryList() {
    let copiedSelection: NameValuePairType[] =
      this.selection !== undefined ? cloneDeep(this.selection) : [];
    let promises = copiedSelection.map(async s => {
      let translatedName = await this._global.language.transform(s.name);
      let promise: PairNameValueTypeFilterParamType = {
        name: s.name,
        value: s.value,
        translatedName: translatedName,
      };
      return promise;
    });

    let result = await Promise.all(promises);
    this.queryList = this.orderByName
      ? result.sort((a, b) => a.translatedName.localeCompare(b.translatedName))
      : result;
  }

  private async setComponentFilterMode() {
    if (this.componentMode === Constant.Default.ComponentMode.Filter) {
      const allTextValue: string = 'label.title.all';
      const translatedText: string = await this._global.language.transform(allTextValue);
      this.componetSelection.unshift({ name: 'label.title.all', value: '' });
      this.queryList.unshift({
        name: allTextValue,
        translatedName: translatedText,
        value: '',
      });
    }
  }
}
