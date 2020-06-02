import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetflixComponent } from './netflix.component';

const routes: Routes = [{ path: '', component: NetflixComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetflixRoutingModule { }
