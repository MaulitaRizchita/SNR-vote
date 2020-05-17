import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  email

  constructor(
    private str: Storage,
    private route: Router
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
    this.route.navigate(['list-kandidat'])
  }

  gotoDaftar(){
    this.route.navigate([''])
  }

  changePw(){

  }
  
  async logOut(){
    await this.str.clear()
    this.route.navigate(['/login'])
  }
}
