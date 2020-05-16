import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddKandidatPage } from './add-kandidat.page';

const routes: Routes = [
  {
    path: '',
    component: AddKandidatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddKandidatPageRoutingModule {}
