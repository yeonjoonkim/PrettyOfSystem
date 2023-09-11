import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Network, ConnectionStatus, NetworkStatus } from '@capacitor/network';
import { Observable, fromEvent } from 'rxjs';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class NetworkConnectionStatusService {
  public status!: ConnectionStatus;
  constructor(private router: Router, private storage: StorageService) {}

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

  public async handleStatus(status: ConnectionStatus) {
    if (status.connected) {
      await this.routeToPreviousAccess();
    } else {
      await this.routeToNoInternetAccess();
    }
  }

  private async routeToNoInternetAccess() {
    let currentUrl = window.location.pathname;
    let previousUrl: string | null = await this.storage.get('previousUrl');

    if (previousUrl === null) {
      await this.storage.store('previousUrl', currentUrl);
    }

    this.router.navigateByUrl('no-internet');
  }

  private async routeToPreviousAccess() {
    let previousUrl: string = await this.storage.get('previousUrl');
    this.storage.removeItem('previousUrl');
    if (typeof previousUrl === 'string') {
      this.router.navigateByUrl(previousUrl);
    }
  }
}
