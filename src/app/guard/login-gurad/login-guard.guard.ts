import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { CheckInClientService } from 'src/app/service/check-in/check-in-client/check-in-client.service';
import { UserService } from 'src/app/service/user/user.service';

export const loginGuard: CanActivateFn = () => {
  const user: UserService = inject(UserService);
  const router: Router = inject(Router);
  return user.isLoggedin$.pipe(
    take(1),
    map(isLogin => {
      if (isLogin) {
        router.navigateByUrl('booking');
        return false;
      } else {
        return true;
      }
    })
  );
};

export const createCheckInClientAccountGuard: CanActivateFn = () => {
  const client: CheckInClientService = inject(CheckInClientService);
  return client.isLoggedout$.pipe(
    take(1),
    map(isLogout => {
      return isLogout;
    })
  );
};
