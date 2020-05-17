import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../../../environments/environment';

@Component({
  selector: 'app-list-kandidat',
  templateUrl: './list-kandidat.page.html',
  styleUrls: ['./list-kandidat.page.scss'],
})
export class ListKandidatPage implements OnInit {

  constructor(
    private route : Router,
    private afDb: AngularFireDatabase,
  ) { 
    this.fetchKandidat()
  }

  ngOnInit() {
    this.fetchKandidat()
  }

  ionViewWillEnter(){
    this.fetchKandidat()
  }

  kandidat

  fetchKandidat(){
    let data = firebase.database().ref('kandidat/').on('value', async val => {
      this.kandidat = await snapshotToArray(val)
    })
    console.log(this.kandidat)
  }

  gotoAdd(){
    this.route.navigate(['/add-kandidat'])
  }
}
