import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthProvider {

  constructor(
    public afAuth: AngularFireAuth, 
    public afDB: AngularFireDatabase
  ) {}

  get windowRef() {
    return window;
  }

  public registerWithPhone(num, recpatcha) {
    return this.afAuth.auth.signInWithPhoneNumber(num, recpatcha);
  }

  public addUser(user) {
    return new Promise((resolve, reject) => {
      this.afDB.list('/users').valueChanges().subscribe((res: any)=> {
        let isExist = false;
        res.forEach(u => {
          if (u.phoneNumber == user.phoneNumber) {
            isExist = true;
            reject('This user is already registered.');
          }
        });
        if (!isExist) {
          this.afDB.list('/users').push(user).then(res => {
            resolve(res);
          });
        }
      });
    });
  }

  public loginWithPhone(num, password) {
    return new Promise((resolve, reject) => {
      this.afDB.list('/users').valueChanges().subscribe((res: any)=> {
        res.forEach(u => {
          if (u.phoneNumber == num && u.password == password) {
            resolve(u);
          } else {
            reject('failed');
          }
        });
      });
    });
  }
}
