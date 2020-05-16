import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/home/home.module').then( m => m.HomePageModule)
  },  {
    path: 'list-kandidat',
    loadChildren: () => import('./admin/kandidat/list-kandidat/list-kandidat.module').then( m => m.ListKandidatPageModule)
  },
  {
    path: 'add-kandidat',
    loadChildren: () => import('./admin/kandidat/add-kandidat/add-kandidat.module').then( m => m.AddKandidatPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
