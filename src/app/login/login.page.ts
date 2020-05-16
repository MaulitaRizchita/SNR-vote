import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

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
    private route : Router
  ) { }

//variable global
username
password

  ngOnInit() {
  }

  async login(){
  try{
    const res = await this.afAuth.signInWithEmailAndPassword(this.username, this.password)
      this.afAuth.onAuthStateChanged(auth => {
        this.str.set('key', auth.uid)
        this.str.set('email', auth.email)
      })
    if(this.username == 'rizchita.p@gmail.com'){
      console.log('admin')
      this.notif('Anda telah berhasil login sebagai Admin')
      //routing
      this.route.navigate(['/admin'])
    }else{
      console.log('Mhs')
      this.notif('Anda telah berhasil login sebagai Mahasiswa')
      //routing
      this.route.navigate(['/user'])
    }
    this.clear()
  }catch(e){
    this.notif(e)
  }
  }

  async notif(msg){
    let pesan = await this.toast.create({
      message : msg,
      duration : 2000 
    })
    pesan.present()
  }

  clear(){
    this.username = null
    this.password = null
  }
}
