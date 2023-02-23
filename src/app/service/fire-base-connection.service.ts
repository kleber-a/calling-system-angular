import { Injectable, EventEmitter } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class FireBaseConnectionService {

  private firebaseConfig = {
    apiKey: "AIzaSyCuCjr9Gmzpx6GQhCu6FFNFLwyAVbGznVA",
    authDomain: "sistema-59c34.firebaseapp.com",
    projectId: "sistema-59c34",
    storageBucket: "sistema-59c34.appspot.com",
    messagingSenderId: "1081438247342",
    appId: "1:1081438247342:web:796bbd39bd08db0278903f",
    measurementId: "G-TG3B81PS1V"
  };
  constructor(private router: Router) { }

  public firebaseApp = initializeApp(this.firebaseConfig);

  public db = getFirestore(this.firebaseApp);
  public auth = getAuth(this.firebaseApp);
  public storage = getStorage(this.firebaseApp);


  SignIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(async (res) => {
        let uid = res.user.uid;

        const userProfile = await getDoc(doc(this.db, "users", uid))

        let data = {
          uid: uid,
          nome: userProfile.data()?.['name'],
          avatarUrl: userProfile.data()?.['avatarUrl'],
          email: res.user.email
        }
        localStorage.removeItem('SistemaUser')
        localStorage.setItem('SistemaUser', JSON.stringify(data));
        return this.router.navigate(['dashboard']);
      })
      .catch((error) => {
        console.log(`Deu erro ${error}`)
      })
  }

  SignUp(name: string, email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        await setDoc(doc(this.db, "users", uid), {
          name: name,
          avatarUrl: null
        })
          .then(() => {
            let data = {
              uid: uid,
              name: name,
              email: value.user.email,
              avatarUrl: null
            };
            localStorage.removeItem('SistemaUser')
            localStorage.setItem('SistemaUser', JSON.stringify(data));
            return this.router.navigate(['dashboard']);
          })
          .catch((error) => {
            console.log(error);
          })

      })
      .catch((error) => {
        console.log(error)
      })
  }

}
