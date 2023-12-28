import {
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
import { GlobalService } from 'src/app/service/global/global.service';
import { TimeItemType } from 'src/app/interface/global/global.interface';
import * as Constant from 'src/app/constant/constant';
import { PreventableEvent, TimePickerIncrementalSteps } from '@progress/kendo-angular-dateinputs';
import { PopoverController } from '@ionic/angular';
import { TimeSelectionPopoverComponent } from './time-selection-popover/time-selection-popover.component';
@Component({
  selector: 'time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent implements OnInit, OnChanges {
  @ViewChild('dropdownListBtn') dropdownListBtn!: ElementRef;
  @ViewChild('selectedName') selectedName!: ElementRef;
  @ViewChild('dropDownArrow') dropDownArrow!: ElementRef;
  @Output() timeChange = new EventEmitter<TimeItemType>();

  @Input() readOnly: boolean = false;
  @Input() timezone: Constant.TimeZoneType = Constant.TimeZone.EuropeRiga;
  @Input() intervalMin: number = Constant.ShopSetting.Calender.IntervalMin;
  @Input() title: string = '';
  @Input() openTime!: TimeItemType;
  @Input() closeTime!: TimeItemType;
  @Input()
  get time(): TimeItemType {
    return this.inputTime;
  }
  set time(time: TimeItemType) {
    this.inputTime = time;
    this.handReceivingEvent();
    this.timeChange.emit(this.inputTime);
  }
  public date: Date = new Date();
  public inputTime!: TimeItemType;
  public minTime: Date = new Date();
  public maxTime: Date = new Date();
  public steps: TimePickerIncrementalSteps = { minute: 0 };
  public isOpenStatus: boolean = false;

  constructor(
    private _global: GlobalService,
    private _popoverCtrl: PopoverController,
    private _renderer: Renderer2
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    let timeChanges = changes['time'];
    this.handleChange(timeChanges);
    this.handleIntervalChange();
  }

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

  async ngOnInit() {
    this.setDefault();
  }

  private handleChange(change: SimpleChange) {
    let firstChange = change?.firstChange;
    if (!firstChange) {
      this.date = new Date();
      this.handReceivingEvent();
    }
  }

  private handleIntervalChange() {
    this.steps = { minute: this.intervalMin % 60 };
  }
  public onChangeDate() {
    this.time = this._global.date.timeItem(this.date);
  }

  private setDefault() {
    this.setDefaultMinTimePicker();
    this.setDefaultMaxTimePicker();
  }

  private setDefaultMinTimePicker() {
    let minHours: number = !this._global.isUndefinedOrNull(this.openTime) ? this.openTime.hr : 0;
    let minMintues: number = !this._global.isUndefinedOrNull(this.openTime) ? this.openTime.min : 0;
    this.minTime.setHours(minHours);
    this.minTime.setMinutes(minMintues);
  }

  private setDefaultMaxTimePicker() {
    let maxHours: number = !this._global.isUndefinedOrNull(this.closeTime) ? this.closeTime?.hr : 23;
    maxHours = maxHours > 0 ? maxHours : 23;
    let maxMintues: number = !this._global.isUndefinedOrNull(this.closeTime) ? this.closeTime?.min : 59;
    maxMintues = this.closeTime?.hr > 0 && this.closeTime?.min > 0 ? maxMintues : 59;
    this.maxTime.setHours(maxHours);
    this.maxTime.setMinutes(maxMintues);
  }

  private handReceivingEvent() {
    this.inputTime = this.inputTime !== undefined ? this.inputTime : this._global.date.timeItem(new Date());
    this.date.setHours(this.inputTime.hr);
    this.date.setMinutes(this.inputTime.min);
    this.date.setSeconds(0);
  }

  private async handleButtonClick(event: Event) {
    await this.presentDropdownList(event);
  }

  private async presentDropdownList(event: any) {
    if (!this.isOpenStatus && !this.readOnly) {
      this.isOpenStatus = true;
      let dropdownList = await this.getPopoverSettings(event);
      await dropdownList.present();
      await this.dismissListener(dropdownList);
    }
  }

  private async dismissListener(dropdownList: HTMLIonPopoverElement) {
    let event = await dropdownList.onWillDismiss();
    if (event?.data !== undefined) {
      this.time = event.data.time;
    }
    this.isOpenStatus = false;
  }

  private async getPopoverSettings(event: any) {
    return await this._popoverCtrl.create({
      component: TimeSelectionPopoverComponent,
      event: event,
      translucent: true,
      size: 'auto',
      componentProps: {
        min: this._global.date.transform.formatLocalDateTime(this.minTime),
        max: this._global.date.transform.formatLocalDateTime(this.maxTime),
        time: this._global.date.transform.formatByTimeItem(this.date, this.time),
        intervalMin: this.intervalMin,
      },
    });
  }
}
