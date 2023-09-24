import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { customClaims } from '@angular/fire/compat/auth-guard';

@Injectable({
  providedIn: 'root',
})
export class CustomAuthGuard implements CanLoad {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | boolean {
    return this.afAuth.idTokenResult.pipe(
      take(1), // Take the first emitted value.
      map(idTokenResult => {
        // Check if the user is authenticated.
        const isAuthenticated = !!idTokenResult;

        // If the user isn't authenticated, redirect them to the 'login' page.
        if (!isAuthenticated) {
          this.router.navigate(['login']);
          return false;
        }

        // Check if the user has the 'isSystemAdmin' claim.
        const claims = idTokenResult?.claims || {};
        const isSystemAdmin = claims['isSystemAdmin'];

        // If the user is authenticated but isn't an admin, redirect them to the 'items' page.
        if (isAuthenticated && !isSystemAdmin) {
          this.router.navigate(['items']);
          return false;
        }

        // If the user is an admin, allow the route/module to be loaded.
        return true;
      })
    );
  }
}
