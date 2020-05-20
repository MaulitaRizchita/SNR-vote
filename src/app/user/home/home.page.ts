import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { snapshotToArray } from 'src/environments/environment';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private str: Storage,
    private route: Router,
    private afDb: AngularFireDatabase,
    private loading: LoadingController,
    private toast: ToastController,
    private alertController: AlertController
  ) {
    // this.tampilLoad()
    this.getStatus()
    this.getKandidat()
  }

  async tampilLoad() {
    var n = await this.loading.create({
      duration: 1200
    })
    n.present()
  }

  key
  nama
  kelas
  jurusan
  status
  calon
  email

  async getStatus() {
    this.str.get('email').then(ret => {
      this.email = ret
    })

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

  async vote(no) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Apakah anda yakin ingin melakukan vote pada No. urut' + no,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: async () => {
            try {

              var jml
              var jumlah
              //get current vote count
              await firebase.database().ref(`kandidat/${no}`).on('value', async res => {
                jml = await res.val().jml_vote
                jumlah = jml + 1
              })


              await this.tampilLoad()
              //add 1 to current vote count
              console.log("jumlah adalah "+jumlah)

              //set Jumlah to Database
              await firebase.database().ref(`kandidat/${no}`).update({
                jml_vote : jumlah
              })

              //uabh status menjadi telah vote
              await firebase.database().ref(`akun/${this.key}`).update({
                status: 'Telah Vote'
              })

              //pesan sukses
              this.notif('Anda telah berhasil melakukan vote pada no. urut ' + no)

            } catch (e) {
              this.notif(e)
            }
          }
        }
      ]
    });

    await alert.present();


  }

  async notif(msg) {
    var n = await this.toast.create({
      message: msg,
      duration: 1200
    })
    n.present()
  }

  async getKandidat() {
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

  ionViewWillEnter() {
    this.getStatus()
    this.getKandidat()
    this.tampilLoad()
  }

  async gotoKandidat(n) {
    await this.str.set('no', n)
    console.log(n)
    this.route.navigate(['/detail'])
  }

  async logOut() {
    await this.str.clear()
    this.route.navigate(['/login'])
  }
}
