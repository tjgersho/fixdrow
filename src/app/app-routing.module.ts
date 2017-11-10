import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IndexComponent
  }, 
  { path: '**',
	redirectTo: '/'
    }
];



@NgModule({
 imports: [RouterModule.forRoot(appRoutes)],
 exports: [RouterModule]


})


export class AppRoutingModule {}