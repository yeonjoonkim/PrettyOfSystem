import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, of, switchMap, take } from 'rxjs';
import { RoleAccessLevelType, RoleConfigurationType } from 'src/app/interface';
import { UserService } from 'src/app/service/user/user.service';

export const posGuard: CanActivateFn = () => {
  const user: UserService = inject(UserService);
  const router: Router = inject(Router);
  const currentURL: string = router.url;
  const isBooking: boolean = currentURL.includes('booking');
  const isLogin: boolean = currentURL.includes('login');
  return user.currentRole$.pipe(
    take(1),
    switchMap(roleConfig => {
      if (roleConfig === null && !isBooking && !isLogin) {
        router.navigateByUrl('booking');
        return of(false);
      }

      if (roleConfig !== null) {
        const userAccessLevel = roleConfig.accessLevel;
        return user.menu$.pipe(
          take(1),
          map(menus => {
            const accessibleUrls: string[] = [];
            menus?.forEach(menu => {
              if (userHasAccess(userAccessLevel, menu.accessLevel)) {
                menu.content.forEach(content => {
                  accessibleUrls.push(content.url);
                });
              }
            });
            return accessibleUrls;
          }),
          map(accessibleUrls => {
            const actualUrl = router.url;
            console.log(actualUrl);
            if (accessibleUrls.includes(actualUrl)) {
              return true;
            } else if (!accessibleUrls.includes(actualUrl) && accessibleUrls.length > 0) {
              router.navigateByUrl(accessibleUrls[0]);
              return false;
            } else {
              router.navigateByUrl('booking');
              return false;
            }
          })
        );
      } else {
        return of(true); // If roleConfig is null and it's a booking or login page, you might want to allow access
      }
    })
  );
};

function userHasAccess(userAccessLevel: RoleAccessLevelType, menuAccessLevel: RoleAccessLevelType) {
  return menuAccessLevel.isSystemAdmin
    ? isSystemAdminLevelAccess(userAccessLevel)
    : menuAccessLevel.isAdmin
    ? isAdminLevelAccess(userAccessLevel)
    : menuAccessLevel.isManager
    ? isManagerLevelAccess(userAccessLevel)
    : menuAccessLevel.isReception
    ? isReceptionLevelAccess(userAccessLevel)
    : menuAccessLevel.isEmployee
    ? isEmployeeLevelAccess(userAccessLevel)
    : false;
}
function isSystemAdminLevelAccess(userAccessLevel: RoleAccessLevelType) {
  return userAccessLevel.isSystemAdmin;
}

function isAdminLevelAccess(userAccessLevel: RoleAccessLevelType) {
  return userAccessLevel.isSystemAdmin || userAccessLevel.isAdmin;
}

function isManagerLevelAccess(userAccessLevel: RoleAccessLevelType) {
  return userAccessLevel.isSystemAdmin || userAccessLevel.isAdmin || userAccessLevel.isManager;
}

function isReceptionLevelAccess(userAccessLevel: RoleAccessLevelType) {
  return (
    userAccessLevel.isSystemAdmin ||
    userAccessLevel.isAdmin ||
    userAccessLevel.isManager ||
    userAccessLevel.isReception
  );
}

function isEmployeeLevelAccess(userAccessLevel: RoleAccessLevelType) {
  return (
    userAccessLevel.isSystemAdmin ||
    userAccessLevel.isAdmin ||
    userAccessLevel.isManager ||
    userAccessLevel.isReception ||
    userAccessLevel.isEmployee
  );
}
