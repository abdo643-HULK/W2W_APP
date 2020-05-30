import {
	Component,
	OnInit,
	AfterViewInit /*HostListener, ElementRef , ViewChild, Renderer2*/
} from '@angular/core';
import Swiper from 'swiper';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
/*import { Navigation, Pagination, Scrollbar,Autoplay,Parallax,EffectFade } from 'swiper/js/swiper.esm.js';
import { fromEvent, Observable, Subscription } from "rxjs";*/

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
	mySwiper: Swiper; //Die Variable, die die Swiper bindet
	faPlayCircle = faPlayCircle;

	constructor() {}

	mobileTabletSwiper() {
		return new Swiper('.home.swiper-container', {
			direction: 'horizontal', //bestimmt die Richtung in der sich die Swiper bewegen sollen
			slidesPerView: 'auto', //Die Anzahl der Slides, die Angezeigt werden sollen, bei auto werden diese durch die Breite in CSS bestimmt
			spaceBetween: 10, //Abstand zwischen den Slides: 10px
			freeMode: true, //keine Zentrierung oder Gruppierung der Slides beim Durchschauen
			observer: true, //Erkennt Veränderungen im Style und reinitialisiert den Swiepr
			observeParents: true
		});
	}
	desktopMonitorSwiper() {
		return new Swiper('.home.swiper-container', {
			direction: 'vertical',
			slidesPerView: 1,
			slidesPerColumn: 3,
			spaceBetween: 10,
			simulateTouch: false,
			observer: true,
			observeParents: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				dynamicBullets: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		});
	}
	tvSwiper() {
		return new Swiper('.home.swiper-container', {
			direction: 'horizontal',
			slidesPerView: 5,
			slidesPerGroup: 5,
			simulateTouch: false,
			spaceBetween: 10,
			loop: true,
			loopFillGroupWithBlank: true,
			observer: true,
			observeParents: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		});
	}
	swiperInit() {
		if (window.matchMedia('(max-width: 1023px)').matches) {
			this.mySwiper = this.mobileTabletSwiper();
		} else if (
			window.matchMedia(
				'(min-width: 1024px) and (max-width: 1439px) and (orientation: portrait)'
			).matches
		) {
			this.mySwiper = this.mobileTabletSwiper();
		} else if (
			window.matchMedia(
				'(min-width: 1024px) and (max-width: 2200px) and (orientation: landscape)'
			).matches
		) {
			this.mySwiper = this.desktopMonitorSwiper();
		} else if (window.matchMedia('(min-width: 2201px)').matches) {
			this.mySwiper = this.tvSwiper();
		} else {
			this.mySwiper = this.desktopMonitorSwiper();
		}
	}

	ngOnInit() {
		this.swiperInit();
	}

	initSwiperOnResize() {
		if (this.mySwiper != null) {
			this.mySwiper.destroy(true, true);
			this.swiperInit();
			this.mySwiper.update();
		}
	}

	ngAfterViewInit() {
		let swipercontainer = <HTMLElement>(
			document.querySelector('.billboard.swiper-container')
		);
		swipercontainer.style.background = 'black';
	}
	/*ngOnDestroy() {
    //this.resizeSubscription$.unsubscribe()
    }*/
}
