import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeRoutingModule } from './prime-routing.module';
import { PrimeComponent } from './prime.component';
import { SharedModule } from '../shared-module/shared-module.module';

@NgModule({
	declarations: [PrimeComponent],
	imports: [CommonModule, PrimeRoutingModule, SharedModule],
})
export class PrimeModule {}
