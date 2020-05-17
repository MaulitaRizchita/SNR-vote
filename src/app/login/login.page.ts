import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private toast: ToastController,
    private afAuth: AngularFireAuth,
    private str: Storage,
    private route: Router,
    private afDb: AngularFireDatabase,
    private loading: LoadingController
    ) { }

  //variable global
  username
  password
  key

  async load(){
    var l = await this.loading.create({
      duration:2000
    })
    l.present()
  }

  setData(key){
    firebase.database().ref(`akun/${key}`).on('value', resp => {
      var val = resp.val()

      this.str.set('nama',val.nama)  
      this.str.set('jurusan',val.jurusan)
      this.str.set('kelas',val.kelas)
      this.str.set('status',val.status)
    })
  }

  ngOnInit() {
  }

  async login() {
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(this.username, this.password)
      this.afAuth.onAuthStateChanged(async auth => {
        this.key = auth.uid
        await this.str.set('key', auth.uid)
        await this.str.set('email', auth.email)

      })
      if (this.username == 'rizchita.p@gmail.com') {
        console.log('admin')
        this.notif('Anda telah berhasil login sebagai Admin')
        //routing
        this.route.navigate(['/admin'])
      } else {
        await this.load()
        console.log('Mhs :'+this.key)
        //await this.setData(this.key)
        this.notif('Anda telah berhasil login sebagai Mahasiswa')
        //routing
        this.route.navigate(['/user'])
      }
      this.clear()
    } catch (e) {
      this.notif(e)
    }
  }

  async notif(msg) {
    let pesan = await this.toast.create({
      message: msg,
      duration: 2000
    })
    pesan.present()
  }

  clear() {
    this.username = null
    this.password = null
  }
}
