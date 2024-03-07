import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Subject, distinctUntilChanged, filter, takeUntil } from 'rxjs';
import { ShopScheduleDocument } from 'src/app/class/global';
import { ShopScheduleRepositoryService } from 'src/app/firebase/shop-repository/shop-schedule-repository/shop-schedule-repository.service';
import { DateStatusType, SchedulerOperatingHoursType, TimeItemType } from 'src/app/interface';
import { DateService } from 'src/app/service/global/date/date.service';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';

const nullableSchedule = null as unknown as ShopScheduleDocument;
const nullableTimeItem = null as unknown as TimeItemType;
@Component({
  selector: 'app-shop-reservation-schedule-edit-modal',
  templateUrl: './shop-reservation-schedule-edit-modal.component.html',
  styleUrls: ['./shop-reservation-schedule-edit-modal.component.scss'],
})
export class ShopReservationScheduleEditModalComponent implements OnInit, OnDestroy {
  private _navParam = inject(NavParams);
  private _dateSvc = inject(DateService);
  private _scheduleRepo = inject(ShopScheduleRepositoryService);
  private _formCtrl = inject(FormControllerService);

  //Param
  private _documentId = this._navParam.get('documentId') as string;
  private _shopId = this._navParam.get('shopId') as string;
  private _destroy$ = new Subject<void>();
  private _query$ = this._scheduleRepo.valueChangeDocumentListener(this._shopId, this._documentId);

  private _startOfDay = this._navParam.get('startOfDay') as string;
  private _shopOperatingHours = this._navParam.get('shopOperatingHours') as SchedulerOperatingHoursType;

  //Form
  protected form = this._formCtrl.setEditFormHeaderModalProp();
  protected shopStartTimeItem = this._dateSvc.timeItem(new Date(this._shopOperatingHours.startDateTime));
  protected shopEndTimeItem = this._dateSvc.timeItem(new Date(this._shopOperatingHours.endDateTime));
  protected isShopOpen = this._shopOperatingHours.isOpen;

  //Document
  protected document = signal<ShopScheduleDocument>(nullableSchedule);
  protected loaded = computed(() => this.document() !== null);
  protected title = computed(() => {
    return this.loaded() ? `${this.document().firstName} ${this.document().lastName}` : '';
  });

  constructor() {}

  ngOnInit() {
    this._query$
      .pipe(
        filter(doc => doc !== null),
        takeUntil(this._destroy$)
      )
      .subscribe(doc => {
        if (doc) {
          this.document.set(new ShopScheduleDocument(doc));
          console.log(this.loaded());
        }
      });
  }

  ionViewWillLeave() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
