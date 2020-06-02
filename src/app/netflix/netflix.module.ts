import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetflixRoutingModule } from './netflix-routing.module';
import { NetflixComponent } from './netflix.component';


@NgModule({
  declarations: [NetflixComponent],
  imports: [
    CommonModule,
    NetflixRoutingModule
  ]
})
export class NetflixModule { }
