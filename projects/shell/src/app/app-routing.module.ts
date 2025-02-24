import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManuComponent } from './manu/manu.component';

const routes: Routes = [
  { path: '', component: ManuComponent  },

 

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
