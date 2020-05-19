import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisAkunPageRoutingModule } from './regis-akun-routing.module';

import { RegisAkunPage } from './regis-akun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisAkunPageRoutingModule
  ],
  declarations: [RegisAkunPage]
})
export class RegisAkunPageModule {}
