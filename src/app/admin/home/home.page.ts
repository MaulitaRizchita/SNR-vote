import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';

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

  changePw(){

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
