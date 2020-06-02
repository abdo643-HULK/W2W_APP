import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyXRoutingModule } from './sky-x-routing.module';
import { SkyXComponent } from './sky-x.component';
import { SkyComponent } from './../pages/sky/sky.component';

@NgModule({
	declarations: [SkyXComponent, SkyComponent],
	imports: [CommonModule, SkyXRoutingModule],
})
export class SkyXModule {}
