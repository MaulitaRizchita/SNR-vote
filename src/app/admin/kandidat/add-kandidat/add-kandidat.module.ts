import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddKandidatPageRoutingModule } from './add-kandidat-routing.module';

import { AddKandidatPage } from './add-kandidat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddKandidatPageRoutingModule
  ],
  declarations: [AddKandidatPage]
})
export class AddKandidatPageModule {}
