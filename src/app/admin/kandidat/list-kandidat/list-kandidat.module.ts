import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListKandidatPageRoutingModule } from './list-kandidat-routing.module';

import { ListKandidatPage } from './list-kandidat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListKandidatPageRoutingModule
  ],
  declarations: [ListKandidatPage]
})
export class ListKandidatPageModule {}
