import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor() {}

  isTimeStamp(value: any): value is firebase.firestore.Timestamp {
    return value instanceof firebase.firestore.Timestamp;
  }

  toDate(value: Date | firebase.firestore.Timestamp): Date {
    return this.isTimeStamp(value) ? value.toDate() : value;
  }
}
