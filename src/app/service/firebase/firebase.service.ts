import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private _afs: AngularFirestore) {}

  isTimeStamp(value: any): value is firebase.firestore.Timestamp {
    return value instanceof firebase.firestore.Timestamp;
  }

  toDate(value: Date | firebase.firestore.Timestamp): Date {
    return this.isTimeStamp(value) ? value.toDate() : value;
  }

  newId() {
    return this._afs.createId();
  }
}
