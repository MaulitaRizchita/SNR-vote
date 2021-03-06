import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase'
import { snapshotToArray } from 'src/environments/environment';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(
    private str: Storage,
  ) { 
    this.getNo()
    this.getData()
  }

  no
  async getNo(){
    await this.str.get('no').then(val => {
      this.no = val
    })
    console.log(this.no)
  }

  dt :any= {
    nama : null,
    visi : null,
    misi : null,
    jml : null,
  }
  async getData(){
    await this.getNo()
    await firebase.database().ref(`kandidat/1`).on('value', async resp => {
      this.dt = await snapshotToArray(resp)
      //this.data.nama = val.nama
      //this.data.visi =val.visi
      //this.data.misi = val.misi
      //this.data.jml = val.jml_vote
    })

    console.log(this.dt)
  }

  ngOnInit() {
    this.getNo()
    this.getData()
  }

}
