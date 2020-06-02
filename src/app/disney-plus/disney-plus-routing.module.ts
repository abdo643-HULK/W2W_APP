import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisneyPlusComponent } from './disney-plus.component';

const routes: Routes = [{ path: '', component: DisneyPlusComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DisneyPlusRoutingModule {}
