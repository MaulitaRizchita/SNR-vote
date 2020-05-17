import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { snapshotToArray } from 'src/environments/environment';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private str: Storage,
    private route : Router,
    private afDb: AngularFireDatabase,
    private loading: LoadingController
    ) { 
   // this.tampilLoad()
    this.getStatus()
    this.getKandidat()
  }

  async tampilLoad(){
    var n = await this.loading.create({
      duration:1200
    })
    n.present()
  }

  key
  nama
  kelas
  jurusan
  status
  calon

  async getStatus(){
    await this.str.get('key').then(res => {
      this.key = res
    })

    firebase.database().ref(`akun/${this.key}`).on('value', k => {
      var val = k.val()

      this.nama = val.nama
      this.kelas = val.kelas
      this.jurusan = val.jurusan
      this.status = val.status
    })
  }

  async getKandidat(){
    await firebase.database().ref(`kandidat/`).on('value', async c => {
      this.calon = await snapshotToArray(c)
      console.log(this.calon)
    })
  }

  ngOnInit() {
    this.getStatus()
    this.getKandidat()
    this.tampilLoad()
  }

  ionViewWillEnter(){
    this.getStatus()
    this.getKandidat()
    this.tampilLoad()
  }

  async gotoKandidat(n){
    await this.str.set('no',n)
    console.log(n)
   this.route.navigate(['/detail'])
  }

  async logOut(){
    await this.str.clear()
    this.route.navigate(['/login'])
  }
}
