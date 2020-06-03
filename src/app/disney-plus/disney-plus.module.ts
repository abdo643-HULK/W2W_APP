import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisneyPlusRoutingModule } from './disney-plus-routing.module';
import { DisneyPlusComponent } from './disney-plus.component';
import { SharedModule } from '../shared-module/shared-module.module';

@NgModule({
	declarations: [DisneyPlusComponent],
	imports: [CommonModule, DisneyPlusRoutingModule, SharedModule],
})
export class DisneyPlusModule {}
