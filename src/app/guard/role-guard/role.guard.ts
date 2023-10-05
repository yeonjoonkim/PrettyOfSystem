import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { UserService } from 'src/app/service/user/user.service';

export const systemAdminGuard: CanActivateFn = () => {
  const user = inject(UserService);
  const router = inject(Router);
  return user.currentRole$.pipe(
    take(1),
    map(s => {
      if (s?.accessLevel?.isSystemAdmin) {
        return true;
      } else {
        //getAvailableUrl();
        router.navigateByUrl(router.url);
        return false;
      }
    })
  );
};

export const adminGuard: CanActivateFn = () => {
  const user = inject(UserService);
  const router = inject(Router);
  return user.currentRole$.pipe(
    take(1),
    map(s => {
      if (s?.accessLevel?.isSystemAdmin || s?.accessLevel?.isAdmin) {
        return true;
      } else {
        router.navigateByUrl(router.url);
        return false;
      }
    })
  );
};

export const managerGuard: CanActivateFn = () => {
  const user = inject(UserService);
  const router = inject(Router);
  return user.currentRole$.pipe(
    take(1),
    map(s => {
      if (s?.accessLevel?.isSystemAdmin || s?.accessLevel?.isAdmin || s?.accessLevel?.isManager) {
        return true;
      } else {
        router.navigateByUrl(router.url);
        return false;
      }
    })
  );
};

export const receptionGuard: CanActivateFn = () => {
  const user = inject(UserService);
  const router = inject(Router);
  return user.currentRole$.pipe(
    take(1),
    map(s => {
      if (
        s?.accessLevel?.isSystemAdmin ||
        s?.accessLevel?.isAdmin ||
        s?.accessLevel?.isManager ||
        s?.accessLevel?.isReception
      ) {
        return true;
      } else {
        router.navigateByUrl(router.url);
        return false;
      }
    })
  );
};

export const employeeGuard: CanActivateFn = () => {
  const user = inject(UserService);
  const router = inject(Router);
  return user.currentRole$.pipe(
    take(1),
    map(s => {
      if (
        s?.accessLevel?.isSystemAdmin ||
        s?.accessLevel?.isAdmin ||
        s?.accessLevel?.isManager ||
        s?.accessLevel?.isReception ||
        s?.accessLevel?.isEmployee
      ) {
        return true;
      } else {
        router.navigateByUrl(router.url);
        return false;
      }
    })
  );
};
