import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListKandidatPage } from './list-kandidat.page';

const routes: Routes = [
  {
    path: '',
    component: ListKandidatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListKandidatPageRoutingModule {}
