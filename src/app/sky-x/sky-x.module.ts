import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyXRoutingModule } from './sky-x-routing.module';
import { SkyXComponent } from './sky-x.component';
import { SharedModule } from '../shared-module/shared-module.module';

@NgModule({
	declarations: [SkyXComponent],
	imports: [CommonModule, SkyXRoutingModule, SharedModule],
})
export class SkyXModule {}
