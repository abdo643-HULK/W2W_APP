import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkyXComponent } from './sky-x.component';

const routes: Routes = [{ path: '', component: SkyXComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkyXRoutingModule { }
