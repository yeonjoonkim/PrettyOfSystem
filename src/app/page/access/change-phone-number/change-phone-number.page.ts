import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, map, of, switchMap, takeUntil } from 'rxjs';
import { ChangePhoneNumberRequestRepositoryService } from 'src/app/firebase/internal-api-repository/change-phone-number-request-repository/change-phone-number-request-repository.service';
import { ToastService } from 'src/app/service/global/toast/toast.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-change-phone-number',
  templateUrl: './change-phone-number.page.html',
  styleUrls: ['./change-phone-number.page.scss'],
})
export class ChangePhoneNumberPage implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  private readonly _requestId: string | null = this._route.snapshot.paramMap.get('id');
  public start$: Observable<boolean> =
    typeof this._requestId === 'string'
      ? this._changePhoneNumber.get(this._requestId).pipe(
          takeUntil(this._destroy$),
          switchMap(request => {
            if (request !== null) {
              return of(true);
            } else {
              return of(false);
            }
          })
        )
      : of(false);

  public phoneNumber: string = '';
  public validator = false;
  public verfiying = false;
  public verified = false;
  public start = false;

  constructor(
    private _route: ActivatedRoute,
    private _changePhoneNumber: ChangePhoneNumberRequestRepositoryService,
    private _user: UserService,
    private _toast: ToastService,
    private _router: Router
  ) {}

  ngOnInit() {}

  public async onSubmit() {
    this.validator = false;
    this.verfiying = true;
    if (typeof this._requestId === 'string') {
      const result = await this._changePhoneNumber.sumbit(this.phoneNumber, this._requestId);
      if (result) {
        this.verified = true;
        setTimeout(async () => {
          await this._router.navigateByUrl('/login');
        }, 6000);
      }
    }
    this.verfiying = false;
  }

  ionViewWillEnter() {
    if (typeof this._requestId === 'string') {
      this.start$.pipe(takeUntil(this._destroy$)).subscribe(async request => {
        if (!request) {
          await this._toast.presentError('Access Denined');
          await this._router.navigateByUrl('/booking');
        } else {
          this.start = true;
        }
      });
      this._user.isLoggedin$.pipe(takeUntil(this._destroy$)).subscribe(login => {
        if (login) {
          this._user.logout();
        }
      });
    }
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
