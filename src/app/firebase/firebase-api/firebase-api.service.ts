import { Injectable, inject } from '@angular/core';
import { AngularFirestoreCollection, QueryFn } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as Constant from 'src/app/constant/constant';
import { AngularFirePerformance } from '@angular/fire/compat/performance';
import { trace } from '@angular/fire/compat/performance';

export const Query = Constant.Query;

@Injectable({
  providedIn: 'root',
})
export class FirebaseApiService {
  private _afs = inject(AngularFirestore);
  private perf = inject(AngularFirePerformance);

  constructor() {}

  private collection<T>(path: string, queryFn?: QueryFn): AngularFirestoreCollection<T> {
    if (queryFn) {
      return this._afs.collection<T>(path, queryFn);
    } else {
      return this._afs.collection<T>(path);
    }
  }

  public getDocument<T>(path: string, queryFn?: QueryFn): Observable<T | null> {
    return this.collection(path, queryFn)
      .get()
      .pipe(
        trace(path),
        map(snapshots => {
          return snapshots.docs.map(doc => doc.data() as T);
        }),
        map(docs => {
          return docs.length > 0 ? docs[0] : null;
        })
      );
  }

  public getDocuments<T>(path: string, queryFn?: QueryFn): Observable<T[]> {
    return this.collection(path, queryFn)
      .get()
      .pipe(
        trace(path),
        map(snapshots => {
          return snapshots.docs.map(doc => doc.data() as T);
        })
      );
  }

  public valueChangeDocument<T>(path: string, queryFn?: QueryFn): Observable<T | null> {
    return this.collection(path, queryFn)
      .valueChanges()
      .pipe(
        trace(path),
        map(snapshots => {
          return snapshots as T[];
        }),
        map(docs => {
          return docs.length > 0 ? docs[0] : null;
        })
      );
  }

  public valueChangeDocuments<T>(path: string, queryFn?: QueryFn): Observable<T[]> {
    return this.collection(path, queryFn)
      .valueChanges()
      .pipe(
        trace(path),
        map(snapshots => {
          return snapshots as T[];
        })
      );
  }

  public snapshotChangeDocument<T>(path: string, queryFn?: QueryFn): Observable<T | null> {
    return this.collection(path, queryFn)
      .snapshotChanges()
      .pipe(
        trace(path),
        map(snapshots => {
          return snapshots.map(doc => {
            return doc.payload.doc.data() as T;
          });
        }),
        map(docs => {
          return docs.length > 0 ? docs[0] : null;
        })
      );
  }

  public snapshotChangeDocuments<T>(path: string, queryFn?: QueryFn): Observable<T[]> {
    return this.collection(path, queryFn)
      .snapshotChanges()
      .pipe(
        trace(path),
        map(snapshots => {
          return snapshots.map(doc => {
            return doc.payload.doc.data() as T;
          });
        })
      );
  }

  public async set<T extends { id?: string }>(path: string, document: T): Promise<string | null> {
    try {
      if (document?.id !== null && document?.id !== undefined && document?.id?.length > 0) {
        await this._afs.collection<T>(path).doc(document.id).set(document);
        return document.id;
      } else {
        const docRef = await this._afs.collection<T>(path).add(document);
        await docRef.set({ ...document, id: docRef.id }, { merge: true });
        return docRef.id;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async updateDocument<T extends { id?: string }>(path: string, document: T): Promise<boolean> {
    try {
      if (document?.id !== undefined && document?.id !== null && document?.id?.length > 0) {
        await this._afs.collection<T>(path).doc(document.id).update(document);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  public async updateField<T>(path: string, documentId: string, field: Partial<T>): Promise<boolean> {
    try {
      await this._afs.collection<T>(path).doc(documentId).update(field);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  public async delete<T>(path: string, documentId: string): Promise<boolean> {
    try {
      if (documentId) {
        await this._afs.collection<T>(path).doc(documentId).delete();
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  public newId() {
    return this._afs.createId();
  }
}

export function createKeyMap<T>(keys: (keyof T)[]): { [K in keyof T]: K } {
  const keyMap: Partial<{ [K in keyof T]: K }> = {};
  keys.forEach(key => {
    keyMap[key] = key;
  });
  return keyMap as { [K in keyof T]: K };
}
