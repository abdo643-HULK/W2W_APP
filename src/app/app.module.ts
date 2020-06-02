import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BillboardComponent } from './components/billboard/billboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

//Homepage
import { HomeComponent } from './home/home.component';

//Home Component
import { DisneyHomeComponent } from './home/components/disney-home/disney-home.component';
import { NetflixHomeComponent } from './home/components/netflix-home/netflix-home.component';
import { PrimeHomeComponent } from './home/components/prime-home/prime-home.component';
import { SkyHomeComponent } from './home/components/sky-home/sky-home.component';

//Directives
import { NavbarColorDirective } from './navbar-color.directive';
import { IntersectionObserverDirective } from './intersectionObserver.directive';
import { SwiperSlideComponent } from './components/swiper-slide/swiper-slide.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		AppComponent,
		BillboardComponent,
		FooterComponent,
		HeaderComponent,
		HomeComponent,
		DisneyHomeComponent,
		NetflixHomeComponent,
		PrimeHomeComponent,
		SkyHomeComponent,
		NavbarColorDirective,
		IntersectionObserverDirective,
		SwiperSlideComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FontAwesomeModule,
		BrowserAnimationsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
