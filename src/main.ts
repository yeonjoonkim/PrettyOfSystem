/// <reference types="@angular/localize" />

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { InternalAPIModule } from './internal-api/internal-api.module';
const currentUrl = window.location.href;

if (environment.production) {
  enableProdMode();
}

if (currentUrl.includes('internal-api')) {
  platformBrowserDynamic()
    .bootstrapModule(InternalAPIModule)
    .catch(err => console.log(err));
} else {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
}
