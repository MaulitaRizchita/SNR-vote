import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-regis-akun',
  templateUrl: './regis-akun.page.html',
  styleUrls: ['./regis-akun.page.scss'],
})
export class RegisAkunPage implements OnInit {
data = {
  email:null,
  pw:null,
  repw:null,
  nama:null,
  kelas:null,
  jurusan:null,
}
  constructor(
    private Toast: ToastController,
    private fireAuth : AngularFireAuth,
    private fireDb : AngularFireDatabase,
    ) { }

  clear(){
    this.data = {
      email:null,
      pw:null,
      repw:null,
      nama:null,
      kelas:null,
      jurusan:null,
    }
  }

  async register(){
    try{
      if(this.data.email == null || this.data.nama == null || this.data.kelas == null || this.data.jurusan == null){
        this.notif('Ada data yang kosong')
      }else if(this.data.pw !== this.data.repw){
        this.notif('Password dan repassword tidak cocok')
      }else{
        //create akun firebase
        await this.fireAuth.createUserWithEmailAndPassword(this.data.email, this.data.repw)
        
        await this.createUserData()
      }
    }catch(e){
      this.notif(e)
    }
  }

  async createUserData(){
    try{
      //logout current user
      await this.fireAuth.signOut()

      var val = {
        nama : this.data.nama,
        kelas : this.data.kelas,
        jurusan: this.data.jurusan,
        status : "Belum Vote"
      }
      //login with new account to get UID
      await this.fireAuth.signInWithEmailAndPassword(this.data.email, this.data.repw)
      //create Data
      await this.fireAuth.authState.subscribe(async auth =>{
        
       await this.fireDb.object(`akun/${auth.uid}`).set(val)
      })

      this.notif('Akun telah berhasil didaftarkan')
      this.clear()
    }catch(e){
      this.notif(e)
    }
  }

  async notif(m){
    var n = await this.Toast.create({
      message:m,
      duration: 2000
    })
    n.present()
  }

  ngOnInit() {
  }

}
