import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { PopoverController } from '@ionic/angular';
import { Subject, distinctUntilChanged, filter, takeUntil } from 'rxjs';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { ShopReservationScheduleAddBreakTimeEditorService } from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-schedule-editor/shop-reservation-schedule-add-break-time-editor/shop-reservation-schedule-add-break-time-editor.service';
import { ShopReservationScheduleEditorService } from 'src/app/service/reservation/shop-reservation-scheduler/shop-reservation-schedule-editor/shop-reservation-schedule-editor.service';

@Component({
  selector: 'app-shop-reservation-schedule-employee-new-break-popover',
  templateUrl: './shop-reservation-schedule-employee-new-break-popover.component.html',
  styleUrls: ['./shop-reservation-schedule-employee-new-break-popover.component.scss'],
})
export class ShopReservationScheduleEmployeeNewBreakPopoverComponent implements OnInit, OnDestroy {
  private _popover = inject(PopoverController);
  private _formCtrl = inject(FormControllerService);
  private _scheduleSvc = inject(ShopReservationScheduleEditorService);
  private _destroy$ = new Subject<void>();
  private _received = signal<boolean>(false);
  private _received$ = toObservable(this._received);

  public form = this._formCtrl.setReadFormHeaderModalProp();
  public newBreakTimeEditor = inject(ShopReservationScheduleAddBreakTimeEditorService);
  public loaded = computed(() => this._received() && this.newBreakTimeEditor.loaded());

  constructor() {
    this.form.headerTitle = 'label.title.addbreaktime';
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this._scheduleSvc._query$.pipe(takeUntil(this._destroy$)).subscribe(doc => {
      if (doc !== null) {
        this._scheduleSvc.query.set(doc);
        this._received.set(true);
      }
    });
    this._received$
      .pipe(
        takeUntil(this._destroy$),
        filter(received => Boolean(received) && received === true),
        distinctUntilChanged()
      )
      .subscribe(received => {
        if (received) {
          this.newBreakTimeEditor.start();
        }
      });
    this._scheduleSvc.completedRequest$.pipe(takeUntil(this._destroy$)).subscribe(async () => {
      await this.onDismiss();
    });
  }

  public async onDismiss() {
    await this._popover.dismiss();
  }

  public async onAddBreakTime() {
    const added = this.newBreakTimeEditor.add();
    if (added) {
      await this._scheduleSvc.updateRequest();
    }
  }

  ionViewWillLeave() {
    this.newBreakTimeEditor.complete();
  }

  ngOnDestroy() {
    this.newBreakTimeEditor.complete();
  }
}
