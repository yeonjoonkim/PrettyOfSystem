import { Injectable } from '@angular/core';
type JsonIpResponseType = {
  ip: string | null;
};

@Injectable({
  providedIn: 'root',
})
export class DeviceAddressService {
  private readonly jsonIp = 'https://ipv4.jsonip.com';
  constructor() {}

  public async IPv4() {
    const promise = await fetch(this.jsonIp, { mode: 'cors' })
      .then(resp => resp.json())
      .then(ip => {
        return ip;
      })
      .catch(err => {
        console.error(err);
        return { ip: null };
      });
    const result = promise as JsonIpResponseType;
    return result.ip;
  }
}
