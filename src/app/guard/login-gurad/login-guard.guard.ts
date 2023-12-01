import { inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanActivateFn, Router } from '@angular/router';
import { map, of, switchMap, take } from 'rxjs';
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

export const isLogin: CanActivateFn = () => {
  const auth = inject(AngularFireAuth);
  const router: Router = inject(Router);
  return auth.authState.pipe(
    switchMap(user => {
      if (user) {
        return of(true);
      } else {
        router.navigateByUrl('booking');
        return of(false);
      }
    })
  );
};
