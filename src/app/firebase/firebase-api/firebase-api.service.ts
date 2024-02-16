import { Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseApiService {
  constructor() {}

  public getAsSignal<T>(collection: AngularFirestoreCollection<T>): Signal<T[]> {
    return toSignal(this.getAsObservable(collection)) as Signal<T[]>;
  }

  public valueChangeAsSignal<T>(collection: AngularFirestoreCollection<T>): Signal<T[]> {
    return toSignal(this.valueChangesAsObservable(collection)) as Signal<T[]>;
  }

  public snapshotAsSignal<T>(collection: AngularFirestoreCollection<T>): Signal<T[]> {
    return toSignal(this.snapshotChangesAsObservable(collection)) as Signal<T[]>;
  }

  public getAsObservable<T>(collection: AngularFirestoreCollection<T>): Observable<T[]> {
    return collection.get().pipe(
      map(snapshots => {
        return snapshots.docs.map(doc => doc.data() as T);
      })
    );
  }

  public valueChangesAsObservable<T>(collection: AngularFirestoreCollection<T>): Observable<T[]> {
    return collection.valueChanges().pipe(
      map(snapshots => {
        // Assuming valueChanges already returns the correct document data as T[]
        return snapshots as T[];
      })
    );
  }

  public snapshotChangesAsObservable<T>(collection: AngularFirestoreCollection<T>): Observable<T[]> {
    return collection.snapshotChanges().pipe(
      map(snapshots => {
        return snapshots.map(doc => {
          return doc.payload.doc.data() as T;
        });
      })
    );
  }
}

export function createKeyMap<T>(keys: (keyof T)[]): { [K in keyof T]: K } {
  const keyMap: Partial<{ [K in keyof T]: K }> = {};
  keys.forEach(key => {
    keyMap[key] = key;
  });
  return keyMap as { [K in keyof T]: K };
}
