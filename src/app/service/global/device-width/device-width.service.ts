import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent, Subscription, Observable, combineLatest } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';

export interface IDeviceType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

abstract class Device {
  protected abstract breakpoint: { lower: number; upper: number };

  isCurrentDevice(width: number): boolean {
    return this.checkDevice(width);
  }

  protected abstract checkDevice(width: number): boolean;
}

class MobileDevice extends Device {
  protected breakpoint = {
    lower: 0,
    upper: 750,
  };

  protected checkDevice(width: number): boolean {
    return width >= this.breakpoint.lower && width <= this.breakpoint.upper;
  }
}

class TabletDevice extends Device {
  protected breakpoint = {
    lower: 751,
    upper: 1024,
  };

  protected checkDevice(width: number): boolean {
    return width >= this.breakpoint.lower && width <= this.breakpoint.upper;
  }
}

class DesktopDevice extends Device {
  protected breakpoint = {
    lower: 1025,
    upper: Infinity,
  };

  protected checkDevice(width: number): boolean {
    return width >= this.breakpoint.lower;
  }
}

@Injectable({
  providedIn: 'root',
})
export class DeviceWidthService implements OnDestroy {
  private _resizeSubscription!: Subscription;

  private _isMobileSource = new BehaviorSubject<boolean>(false);
  private _isTabletSource = new BehaviorSubject<boolean>(false);
  private _isDesktopSource = new BehaviorSubject<boolean>(false);

  public deviceTypeObservable: Observable<IDeviceType>;
  public deviceType: IDeviceType = {
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  };
  constructor() {
    this.deviceTypeObservable = this.initResizeObservable();
  }

  ngOnDestroy(): void {
    this._resizeSubscription?.unsubscribe();
  }

  private getCurrentDevice(width: number): Device {
    const deviceList: Device[] = [new MobileDevice(), new TabletDevice(), new DesktopDevice()];

    return deviceList.find(device => device.isCurrentDevice(width))!;
  }

  private initResizeObservable(): Observable<IDeviceType> {
    const resize$ = fromEvent(window, 'resize').pipe(
      debounceTime(100),
      map(() => window.innerWidth),
      startWith(window.innerWidth)
    );

    this._resizeSubscription = resize$.subscribe(width => {
      const currentDevice = this.getCurrentDevice(width);
      this.updateDeviceType(currentDevice);
    });

    return combineLatest([
      this._isMobileSource.asObservable(),
      this._isTabletSource.asObservable(),
      this._isDesktopSource.asObservable(),
    ]).pipe(
      map(([isMobile, isTablet, isDesktop]): IDeviceType => ({ isMobile, isTablet, isDesktop }))
    );
  }

  private updateDeviceType(device: Device): void {
    this._isMobileSource.next(device instanceof MobileDevice);
    this._isTabletSource.next(device instanceof TabletDevice);
    this._isDesktopSource.next(device instanceof DesktopDevice);
  }
}
