import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCpComponent } from './new-cp/new-cp.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

   routes: Routes = [
    { path: '/cp', component: NewCpComponent }, // Default route, empty path
  ];
 }
