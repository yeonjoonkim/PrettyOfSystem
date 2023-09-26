import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IUser } from 'src/app/interface';
import * as Db from 'src/app/constant/firebase-path';
import { Observable, catchError, from, map, switchMap, take, throwError } from 'rxjs';
import { FirebaseToasterService } from '../../firebase-toaster/firebase-toaster.service';

@Injectable({
  providedIn: 'root',
})
export class UserCredentialRepositoryService {
  private readonly _timeStamp = { lastModifiedDate: new Date() };
  private readonly _emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  constructor(private _afs: AngularFirestore, private _toaster: FirebaseToasterService) {}

  public async verifyUserAccount(input: string) {
    const isEmailUser = this._emailRegex.test(input);
    if (isEmailUser) {
      return await this.verifyUserByEmail(input);
    } else {
      return await this.verifyUserByPhone(input);
    }
  }

  public subscribeUserByPhoneNumber(phoneNumber: string): Observable<IUser | null> {
    const userCollectionRef = this._afs.collection<IUser>(Db.Context.User, ref =>
      ref
        .where('phoneNumber', '==', phoneNumber)
        .where('loginOption.phoneNumber', '==', true)
        .limit(1)
    );

    return userCollectionRef.get().pipe(
      map(userQuerySnapshot => {
        if (userQuerySnapshot.docs.length > 0) {
          return userQuerySnapshot.docs[0].data();
        } else {
          return null;
        }
      })
    );
  }

  public subscribeValueChangeListener(id: string): Observable<IUser | null> {
    const userDocRef = this._afs.doc<IUser>(`${Db.Context.User}/${id}`);

    return userDocRef.valueChanges().pipe(
      map(userData => (userData ? userData : null)),
      catchError(error => throwError(error))
    );
  }

  public subscribeUserByEmail(email: string): Observable<IUser | null> {
    const userCollectionRef = this._afs.collection<IUser>(Db.Context.User, ref =>
      ref.where('email', '==', email).where('loginOption.email', '==', true).limit(1)
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
    let command = { ...user, ...this._timeStamp };
    try {
      console.log(user.id);
      await this._afs.collection(Db.Context.User).doc(user.id).set(command);
      await this._toaster.addSuccess();
      return true;
    } catch (error) {
      await this._toaster.addFail(error);
      console.error(error);
      return false;
    }
  }
  public async updateUser(user: IUser) {
    const updateCriteria = { ...user, ...this._timeStamp };
    try {
      await this._afs.collection(Db.Context.User).doc(user.id).update(updateCriteria);
      await this._toaster.updateSuccess();
      return true;
    } catch (error) {
      await this._toaster.updateFail(error);
      console.error(error);
      return false;
    }
  }

  public async deleteUser(user: IUser) {
    try {
      await this._afs.collection(Db.Context.User).doc(user.id).delete();
      await this._toaster.deleteSuccess();
      return true;
    } catch (error) {
      await this._toaster.deleteFail(error);
      console.error(error);
      return false;
    }
  }

  private async verifyUserByEmail(email: string) {
    try {
      const result = this.subscribeUserByEmail(email).pipe(take(1));
      return result !== null;
    } catch (error) {
      console.error('Error verifying user by email:', error);
      return false;
    }
  }

  private async verifyUserByPhone(phone: string): Promise<boolean> {
    try {
      const result = this.subscribeUserByPhoneNumber(phone).pipe(take(1));
      return result !== null;
    } catch (error) {
      console.error('Error verifying user by phone:', error);
      return false;
    }
  }
}