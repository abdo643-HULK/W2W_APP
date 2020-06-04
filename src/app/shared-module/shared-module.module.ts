import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardComponent } from '../components/flip-card/flip-card.component';
import { BillboardComponent } from '../components/billboard/billboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperComponent } from '../components/swiper/swiper.component';

@NgModule({
	declarations: [FlipCardComponent, BillboardComponent, SwiperComponent],
	imports: [CommonModule, FontAwesomeModule],
	exports: [FlipCardComponent, BillboardComponent, SwiperComponent],
})
export class SharedModule {}
