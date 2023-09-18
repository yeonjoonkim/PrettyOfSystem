import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Network, ConnectionStatus } from '@capacitor/network';
import { Observable } from 'rxjs';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class NetworkConnectionStatusService {
  public status!: ConnectionStatus;
  constructor(private _router: Router, private _storage: StorageService) {}

  public activateListener(): Observable<ConnectionStatus> {
    return new Observable<ConnectionStatus>(observer => {
      const handler = (status: ConnectionStatus) => {
        observer.next(status);
      };

      const listener = Network.addListener('networkStatusChange', handler);

      // Emit the initial value when the observer subscribes
      Network.getStatus().then(initialStatus => {
        observer.next(initialStatus);
      });

      return () => {
        listener.remove();
      };
    });
  }

  public async isConnected() {
    return Network.getStatus().then(status => {
      return status.connected;
    });
  }

  public async handleStatus(status: ConnectionStatus) {
    if (status.connected) {
      await this.routeToPreviousAccess();
    } else {
      await this.routeToNoInternetAccess();
    }
  }

  private async routeToNoInternetAccess() {
    let currentUrl = window.location.pathname;
    let previousUrl: string | null = await this._storage.get('previousUrl');

    if (previousUrl === null) {
      await this._storage.store('previousUrl', currentUrl);
    }

    this._router.navigateByUrl('no-internet');
  }

  private async routeToPreviousAccess() {
    let previousUrl: string = await this._storage.get('previousUrl');
    this._storage.removeItem('previousUrl');
    if (typeof previousUrl === 'string') {
      this._router.navigateByUrl(previousUrl);
    }
  }
}
