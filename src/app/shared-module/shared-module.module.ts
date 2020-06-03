import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperSlideComponent } from '../components/swiper-slide/swiper-slide.component';
import { BillboardComponent } from '../components/billboard/billboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	declarations: [SwiperSlideComponent, BillboardComponent],
	imports: [CommonModule, FontAwesomeModule],
	exports: [SwiperSlideComponent, BillboardComponent],
})
export class SharedModule {}
