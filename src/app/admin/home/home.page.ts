import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController, AlertController } from '@ionic/angular';
import * as firebase from 'firebase'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  email

  constructor(
    private str: Storage,
    private route: Router,
    private afAuth : AngularFireAuth,
    private toast: ToastController,
    private alertController: AlertController,
  ) { 
    this.getEmail()
  }

  ngOnInit() {
  }

  async getEmail(){
    await this.str.get('email').then(result => {
      this.email = result
    })
  }

  gotoKandidat(){
    this.route.navigate(['/list-kandidat'])
  }

  gotoDaftar(){
    this.route.navigate(['/regis-akun'])
  }

  async changePw(){
      const alert = await this.alertController.create({
        message: 'Alamat ganti password telah dikirimkan ke email anda',
        buttons: [
          {
            text: 'Ok',
            role: 'cancel',
            handler:async () => {
               await firebase.auth().sendPasswordResetEmail(this.email)
            },
          },
        ],
      });
      await alert.present();
    }
  
  
  async pesan(msg){
    var n = await this.toast.create({
      message:msg,
      duration:2000
    })
    n.present()
  }

  async logOut(){
    await this.afAuth.signOut()
    await this.str.clear()
    this.pesan('Anda telah berhasil log out')
    this.route.navigate(['/login'])
  }


}
