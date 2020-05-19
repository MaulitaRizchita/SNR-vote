import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisAkunPage } from './regis-akun.page';

const routes: Routes = [
  {
    path: '',
    component: RegisAkunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisAkunPageRoutingModule {}
