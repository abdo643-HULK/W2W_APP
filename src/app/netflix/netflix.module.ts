import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetflixRoutingModule } from './netflix-routing.module';
import { NetflixComponent } from './netflix.component';
import { SharedModule } from '../shared-module/shared-module.module';

@NgModule({
	declarations: [NetflixComponent],
	imports: [CommonModule, NetflixRoutingModule, SharedModule],
})
export class NetflixModule {}
