import { NgModule } from '@angular/core';
//Imports
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Exports
import { FlipCardComponent } from '../components/flip-card/flip-card.component';
import { BillboardComponent } from '../components/billboard/billboard.component';
import { SwiperComponent } from '../components/swiper/swiper.component';
import { DialogComponent } from '../components/dialog/dialog.component';
import { SwiperInitDirective } from '../directives/swiper-init.directive';
import { NavbarColorDirective } from '../navbar-color.directive';
import { IntersectionObserverDirective } from '../directives/intersectionObserver.directive';

@NgModule({
	imports: [CommonModule, FontAwesomeModule, MaterialModule],
	declarations: [
		FlipCardComponent,
		BillboardComponent,
		SwiperComponent,
		DialogComponent,
		SwiperInitDirective,
		NavbarColorDirective,
		IntersectionObserverDirective,
	],
	exports: [
		FlipCardComponent,
		BillboardComponent,
		SwiperComponent,
		DialogComponent,
		SwiperInitDirective,
		NavbarColorDirective,
		IntersectionObserverDirective,
		MaterialModule,
	],
})
export class SharedModule {}
