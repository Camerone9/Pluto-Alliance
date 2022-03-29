import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { Observable, of, switchMap } from 'rxjs';
import { User } from '../models/user.model';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  user$: Observable<User | null | undefined>;
  isLoggedIn = false
  constructor(
    public firebaseAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
    ) { 
      this.user$ = this.firebaseAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        })
      )
    }

  async googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.firebaseAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user, 'Google');
  }

  private updateUserData(user: any, provider: string) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      provider: provider,
      allowEmail: true
    }

    return userRef.set(data, { merge: true });
  }

  public async facebookSignin() {
    const provider = new firebase.auth.FacebookAuthProvider;
    await this.firebaseAuth.signInWithPopup(provider).then(result => {
      return this.updateUserData(result.user, 'Facebook');
    });
  }


  async signIn(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password).then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
    })
  }

  async signUp(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(res => {
      localStorage.setItem('user', JSON.stringify(res.user));
    })
  }

  async logout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    return this.router.navigate(['/']);
  }
}
