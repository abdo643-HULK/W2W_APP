import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillboardComponent } from './components/billboard/billboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

//Pages
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

//Home Component
import { DisneyHomeComponent } from './pages/home/components/disney-home/disney-home.component';
import { NetflixHomeComponent } from './pages/home/components/netflix-home/netflix-home.component';
import { PrimeHomeComponent } from './pages/home/components/prime-home/prime-home.component';
import { SkyHomeComponent } from './pages/home/components/sky-home/sky-home.component';

//Directives
import { NavbarColorDirective } from './navbar-color.directive';
import { IntersectionObserverDirective } from './intersectionObserver.directive';
import { SwiperSlideComponent } from './components/swiper-slide/swiper-slide.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		AppComponent,
		BillboardComponent,
		ContactComponent,
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
		FormsModule,
		HttpClientModule,
		FontAwesomeModule,
		BrowserAnimationsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
