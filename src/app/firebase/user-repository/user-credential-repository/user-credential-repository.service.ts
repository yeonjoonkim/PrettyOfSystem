import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IUser } from 'src/app/interface';
import * as Db from 'src/app/constant/firebase-path';
import { Observable, catchError, from, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserCredentialRepositoryService {
  private readonly _timeStamp = { lastModifiedDate: new Date() };
  constructor(private _afs: AngularFirestore) {}

  public subscribeUserByPhoneNumber(phoneNumber: string): Observable<IUser | null> {
    const userCollectionRef = this._afs.collection<IUser>(Db.Context.User, ref =>
      ref.where('phoneNumber', '==', phoneNumber).limit(1)
    );

    return userCollectionRef.get().pipe(
      map(userQuerySnapshot => {
        if (userQuerySnapshot.docs.length > 0) {
          return userQuerySnapshot.docs[0].data();
        } else {
          return null;
        }
      }),
      catchError(error => {
        throw error;
      })
    );
  }

  public subscribeUserByEmail(email: string): Observable<IUser | null> {
    const userCollectionRef = this._afs.collection<IUser>(Db.Context.User, ref =>
      ref.where('email', '==', email).limit(1)
    );

    return userCollectionRef.get().pipe(
      map(userQuerySnapshot => {
        if (userQuerySnapshot.docs.length > 0) {
          return userQuerySnapshot.docs[0].data();
        } else {
          return null;
        }
      }),
      catchError(error => {
        throw error;
      })
    );
  }

  public subscribeAllUser() {
    return this._afs
      .collection<IUser>(Db.Context.User, ref => ref.orderBy('isSystemAdmin'))
      .get()
      .pipe(
        switchMap(userSnapshots =>
          from(
            Promise.all(
              userSnapshots.docs.map(snapshot => {
                const user = snapshot.data();
                return user;
              })
            )
          )
        )
      );
  }

  public async createUser(user: IUser): Promise<boolean> {
    user.id = this._afs.createId();
    let createUserCriteria = { ...user, ...this._timeStamp };
    try {
      await this._afs
        .collection(Db.Context.User)
        .doc(createUserCriteria.id)
        .set(createUserCriteria);
      return true;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  public async updateUser(user: IUser) {
    const updateCriteria = { ...user, ...this._timeStamp };
    try {
      await this._afs.collection(Db.Context.User).doc(user.id).update(updateCriteria);
    } catch (err) {}
  }
}
