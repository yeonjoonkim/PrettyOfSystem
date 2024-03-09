import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  inject,
} from '@angular/core';
import { PopoverController } from '@ionic/angular';
import * as Constant from 'src/app/constant/constant';
import { GlobalService } from 'src/app/service/global/global.service';
import { DateSelectionPopoverComponent } from './date-selection-popover/date-selection-popover.component';
import { ShopWorkHoursType } from 'src/app/interface';
import { KendoUiService } from 'src/app/service/global/kendo-ui/kendo-ui.service';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit, OnChanges {
  public kendo = inject(KendoUiService);

  @ViewChild('dropdownListBtn') dropdownListBtn!: ElementRef;
  @ViewChild('selectedName') selectedName!: ElementRef;
  @ViewChild('dropDownArrow') dropDownArrow!: ElementRef;
  @Output() dateChange = new EventEmitter<string>();
  @Input() title: string = '';
  @Input() dateFormatter: Constant.DateFormatType = Constant.Date.Format.Australia;
  @Input() shopTimeZone: Constant.TimeZoneType = Constant.TimeZone.AustraliaBrisbane;
  @Input() displayPreviousDay: number = 0;
  @Input() displayNextDay: number = 0;
  @Input() restrictedFromToday: boolean = false;
  @Input() readOnly: boolean = false;
  @Input() isDateOfBrith: boolean = false;
  @Input() type: 'start' | 'end' = 'start';
  @Input() operatingHours!: ShopWorkHoursType | undefined;
  @Input() displayCenter: boolean = false;
  @Input() displayDay: boolean = false;

  public inputDate: Date = new Date();
  public minDate: Date = new Date();
  public maxDate: Date = new Date();
  private _isOpenStatus: boolean = false;
  @Input()
  get date(): string {
    return this._global.date.transform.formatLocalDateTime(this.inputDate);
  }
  set date(input: string) {
    const ofDay = this.type === 'start' ? this._global.date.startDay(input) : this._global.date.endDay(input);
    this.inputDate = this._global.date.transform.toLocalDateTime(ofDay);
  }

  public getDays(days: string) {
    return this._global.date.getDay(days);
  }

  constructor(
    private _global: GlobalService,
    private _popoverCtrl: PopoverController,
    private _renderer: Renderer2
  ) {}

  ngOnChanges() {
    this.setMinMaxDate();
  }

  ngAfterViewInit() {
    this.setupEventListeners();
  }

  private setupEventListeners() {
    if (this.dropdownListBtn && this.selectedName && this.dropDownArrow) {
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

  ngOnInit() {}

  public transformDate(selectedDate: Date) {
    const ofDay =
      this.type === 'start' ? this._global.date.startDay(selectedDate) : this._global.date.endDay(selectedDate);
    this.inputDate = this._global.date.transform.toLocalDateTime(ofDay);
    this.dateChange.emit(ofDay);
  }

  private setMinMaxDate() {
    const minDate = this._global.date.minimumDate(
      this.shopTimeZone,
      this.restrictedFromToday,
      this.displayPreviousDay
    );
    const maxDate = this._global.date.maximumDate(this.shopTimeZone, this.displayNextDay);
    this.minDate = this._global.date.transform.toLocalDateTime(minDate);
    this.maxDate = this.isDateOfBrith
      ? this._global.date.transform.toLocalDateTime(new Date())
      : this._global.date.transform.toLocalDateTime(maxDate);
  }

  private async handleButtonClick(event: Event) {
    await this.presentDropdownList(event);
  }

  private async presentDropdownList(event: any) {
    if (!this._isOpenStatus && !this.readOnly) {
      this._isOpenStatus = true;
      let dropdownList = await this.getPopoverSettings(event);
      await dropdownList.present();
      await this.dismissListener(dropdownList);
    }
  }

  private async dismissListener(dropdownList: HTMLIonPopoverElement) {
    let event = await dropdownList.onWillDismiss();
    if (event?.data !== undefined) {
      this.transformDate(event.data.date as Date);
    }
    this._isOpenStatus = false;
  }

  private async getPopoverSettings(event: any) {
    const customClass = 'date-popover-container center-popover-container';
    return await this._popoverCtrl.create({
      component: DateSelectionPopoverComponent,
      event: event,
      translucent: true,
      size: 'cover',
      cssClass: customClass,
      componentProps: {
        date: this.inputDate,
        minDate: this.minDate,
        maxDate: this.maxDate,
        operatingHours: this.operatingHours,
        dateFormatter: this.dateFormatter,
        isBrithDay: this.isDateOfBrith,
      },
    });
  }
}
