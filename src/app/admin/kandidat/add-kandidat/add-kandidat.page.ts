import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-kandidat',
  templateUrl: './add-kandidat.page.html',
  styleUrls: ['./add-kandidat.page.scss'],
})
export class AddKandidatPage implements OnInit {

  data : any = {
    no: null,
    nama: null,
    visi: null,
    misi: null,
  }

  constructor(
    private toast: ToastController,
    private afDb: AngularFireDatabase,
    private route: Router
    ) { }

  ngOnInit() {
  }

  async register(){
    await firebase.database().ref(`kandidat/${this.data.no}/`).set({
      no: this.data.no,
      nama: this.data.nama,
      visi: this.data.visi,
      misi: this.data.misi,
      jml_vote: 0
    })
    this.clear()
    this.notif('Kandidat telah ditambahkan')

  }

  async notif(msg){
    var pesan = await this.toast.create({
      message: msg,
      duration: 2000
    })
    pesan.present()
  }

  clear(){
    this.data.no = null
    this.data.nama = null
    this.data.visi = null
    this.data.misi = null
  }

  gotoList(){
    this.route.navigate(['/list-kandidat'])
  }
}
