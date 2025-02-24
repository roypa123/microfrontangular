import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManuComponent } from './manu/manu.component';

const routes: Routes = [
  { path: '', component: ManuComponent  },

  {
    path: 'mfe1',
    loadChildren: () => import('mfe1/Module').then(m => m.Mfe1Module)
  },
  {
    path: 'mfe2',
    loadChildren: () => import('mfe2/Module').then(m => m.Mfe2Module)
  },

  // { path: '',
  //   redirectTo: '/mfe1', pathMatch: 'full' }

  // {
  //   path: '**',
  //   redirectTo: '',
  //   pathMatch: 'full',
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
