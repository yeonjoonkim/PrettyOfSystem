import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ITimer, ITimerDuration, ITimerPercent } from 'src/app/interface';
import { DateTransformService } from '../date/date-transform/date-transform.service';
@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private _defaultValue: ITimer = {
    timerSettingMin: 0,
    startDateTime: new Date(),
    currentDateTime: new Date(),
    endDateTime: new Date(),
    inProgress: false,
    end: false,
    duration: { hour: 0, min: 0, sec: 0 },
    percent: { remain: 100, used: 0 },
    label: '',
  };
  private _dateTransform: DateTransformService;
  private _valueSubject: BehaviorSubject<ITimer> = new BehaviorSubject<ITimer>(this._defaultValue);
  public value$: Observable<ITimer> = this._valueSubject.asObservable();
  private _subscription!: Subscription;

  private _interval: any;

  constructor() {
    this._dateTransform = new DateTransformService();
  }

  public async startTimerByMin(min: number) {
    const now = new Date();
    const endDateTime = this._dateTransform.addMin(now, min);
    const duration = this.calculateDiffEndAndCurrent(endDateTime, now);

    const updatedTimer: ITimer = {
      ...this._defaultValue,
      timerSettingMin: min,
      startDateTime: now,
      currentDateTime: now,
      endDateTime: endDateTime,
      duration: duration,
      inProgress: true,
      percent: this.calculatePercent(now, now, endDateTime),
    };
    this._valueSubject.next(updatedTimer);
    this.inProgress();
    this.updateTimer();
  }

  public addMin(min: number) {
    let currentTimer = this._valueSubject.getValue();
    if (!currentTimer.end && currentTimer.inProgress) {
      currentTimer.currentDateTime = new Date();
      currentTimer.endDateTime = this._dateTransform.addMin(currentTimer.endDateTime, min);
      currentTimer.duration = this.calculateDiffEndAndCurrent(
        currentTimer.endDateTime,
        currentTimer.currentDateTime
      );
      currentTimer.percent = this.calculatePercent(
        currentTimer.startDateTime,
        currentTimer.currentDateTime,
        currentTimer.endDateTime
      );
      this._valueSubject.next(currentTimer);
    }
  }

  private calculateDiffEndAndCurrent(end: Date, current: Date): ITimerDuration {
    let duration = this._dateTransform.diff(end, current);
    return { hour: duration.hours(), min: duration.minutes(), sec: duration.seconds() };
  }

  private inProgress() {
    this._interval = setInterval(() => {
      this.updateTimer();
    }, 1000); // Every 1 second

    this._subscription = this._valueSubject.subscribe(currentTimer => {
      if (currentTimer.end) {
        this.end();
      }
    });
  }

  public async end() {
    clearInterval(this._interval);
    this._subscription?.unsubscribe();
  }

  public async restart() {
    let currentTimer = this._valueSubject.getValue();
    this.end();
    this._valueSubject.next(this._defaultValue);
    await this.startTimerByMin(currentTimer.timerSettingMin);
  }

  private calculatePercent(start: Date, current: Date, end: Date): ITimerPercent {
    let startTimeStamp = start.getTime();
    let currentTimeStamp = current.getTime();
    let endTimeStamp = end.getTime();
    let usedPercent = ((currentTimeStamp - startTimeStamp) / (endTimeStamp - startTimeStamp)) * 100;
    let remainingPercent = 100 - usedPercent;

    return {
      used: parseFloat(usedPercent.toFixed(2)),
      remain: parseFloat(remainingPercent.toFixed(2)),
    };
  }

  private replaceNegativeDiffToZero(duration: ITimerDuration) {
    duration.hour = duration.hour > 0 ? duration.hour : 0;
    duration.min = duration.min > 0 ? duration.min : 0;
    duration.sec = duration.sec > 0 ? duration.sec : 0;

    return duration;
  }

  private setLabel(duration: ITimerDuration): string {
    let label = '';
    let hours: string = this.setTimeLabel(duration.hour);
    let min: string = this.setTimeLabel(duration.min);
    let sec: string = this.setTimeLabel(duration.sec);
    if (duration.hour) {
      label += hours + ':';
    }
    label += min + ':' + sec;

    return label;
  }

  private setTimeLabel(num: number) {
    return num > 9 ? num.toString() : '0' + num;
  }

  private updateTimer() {
    let currentTimer = this._valueSubject.getValue();
    let now = new Date();
    let diff = this.calculateDiffEndAndCurrent(currentTimer.endDateTime, now);
    let duration = this.replaceNegativeDiffToZero(diff);
    let percent = this.calculatePercent(currentTimer.startDateTime, now, currentTimer.endDateTime);
    let updateTimer: ITimer = {
      ...currentTimer,
      currentDateTime: now,
      duration: duration,
      percent: percent,
      inProgress: duration.hour > 0 && duration.min > 0 && duration.sec > 0,
      end: duration.hour <= 0 && duration.min <= 0 && duration.sec <= 0,
    };

    updateTimer.percent.remain = updateTimer.end ? 0 : updateTimer.percent.remain;
    updateTimer.percent.used = updateTimer.end ? 100 : updateTimer.percent.used;
    updateTimer.label = this.setLabel(updateTimer.duration);

    this._valueSubject.next(updateTimer);
  }
}