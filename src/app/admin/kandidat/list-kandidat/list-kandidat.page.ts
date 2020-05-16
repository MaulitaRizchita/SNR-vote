import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-kandidat',
  templateUrl: './list-kandidat.page.html',
  styleUrls: ['./list-kandidat.page.scss'],
})
export class ListKandidatPage implements OnInit {

  constructor(
    private route : Router
  ) { }

  ngOnInit() {
  }

  gotoAdd(){
    this.route.navigate(['/add-kandidat'])
  }
}
