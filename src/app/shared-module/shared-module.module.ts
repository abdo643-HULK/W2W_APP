import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardComponent } from '../components/flip-card/flip-card.component';
import { BillboardComponent } from '../components/billboard/billboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperComponent } from '../components/swiper/swiper.component';
import { DialogComponent } from '../components/dialog/dialog.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
	declarations: [
		FlipCardComponent,
		BillboardComponent,
		SwiperComponent,
		DialogComponent,
	],
	imports: [CommonModule, FontAwesomeModule, MaterialModule],
	exports: [
		FlipCardComponent,
		BillboardComponent,
		SwiperComponent,
		DialogComponent,
	],
})
export class SharedModule {}
