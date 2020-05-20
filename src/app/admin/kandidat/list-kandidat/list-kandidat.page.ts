import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { snapshotToArray } from '../../../../environments/environment';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list-kandidat',
  templateUrl: './list-kandidat.page.html',
  styleUrls: ['./list-kandidat.page.scss'],
})
export class ListKandidatPage implements OnInit {

  constructor(
    private route : Router,
    private afDb: AngularFireDatabase,
    private alertController: AlertController,
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

  async  delete(id){
      const alert = await this.alertController.create({
        message: 'Apakah anda ingin menghapus kandidat dengan no. urut '+id+' ?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: blah => {
              console.log('Confirm Cancel: blah');
            },
          },
          {
            text: 'Okay',
            handler: () => {
              console.log('kandidat no urut '+id+' telah dihapus')
              firebase.database().ref(`kandidat/${id}`).remove()
            },
          },
        ],
      });
    
      await alert.present();
    
  }

  gotoAdd(){
    this.route.navigate(['/add-kandidat'])
  }
}
