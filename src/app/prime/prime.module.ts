import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeRoutingModule } from './prime-routing.module';
import { PrimeComponent } from './prime.component';


@NgModule({
  declarations: [PrimeComponent],
  imports: [
    CommonModule,
    PrimeRoutingModule
  ]
})
export class PrimeModule { }
