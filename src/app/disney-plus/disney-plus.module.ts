import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisneyPlusRoutingModule } from './disney-plus-routing.module';
import { DisneyPlusComponent } from './disney-plus.component';
import { BillboardComponent } from '../components/billboard/billboard.component';

@NgModule({
	declarations: [DisneyPlusComponent, BillboardComponent],
	imports: [CommonModule, DisneyPlusRoutingModule],
})
export class DisneyPlusModule {}
