import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToImplementComponent } from "./to-implement/to-implement.component";

const routes: Routes = [{ path: '', component: ToImplementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
