import {
	Component,
	OnInit,
	AfterViewInit /*HostListener, ElementRef , ViewChild, Renderer2*/,
} from '@angular/core';
// import Swiper from 'swiper';
import { Swiper, Navigation, Pagination } from 'swiper/js/swiper.esm.js';
// import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
	mySwiper;

	constructor() {}

	mobileTabletSwiper() {
		return new Swiper('.home.swiper-container', {
			direction: 'horizontal',
			slidesPerView: 'auto',
			spaceBetween: 10,
			freeMode: true,
			observer: true,
			observeParents: true,
			grabCursor: true,
			mousewheel: true,
		});
	}

	desktopMonitorSwiper() {
		Swiper.use([Navigation, Pagination]);
		return new Swiper('.home.swiper-container', {
			// lazy:true, //enables lazyloading add to html
			// <img data-src="https://swiperjs.com/demos/images/nature-1.jpg" class="swiper-lazy">
			// <!-- Preloader image -->
			// <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
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
				dynamicBullets: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}

	tvSwiper() {
		Swiper.use([Navigation, Pagination]);
		return new Swiper('.home.swiper-container', {
			direction: 'horizontal',
			slidesPerView: 6,
			slidesPerGroup: 6,
			simulateTouch: false,
			spaceBetween: 10,
			loop: true,
			loopFillGroupWithBlank: true,
			observer: true,
			observeParents: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
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
			// this.mySwiper.push(this.mobileTabletSwiper());
		} else if (
			window.matchMedia(
				'(min-width: 1024px) and (max-width: 2200px) and (orientation: landscape)'
			).matches
		) {
			this.mySwiper = this.desktopMonitorSwiper();
			// this.mySwiper.push(this.desktopMonitorSwiper());
		} else if (window.matchMedia('(min-width: 2201px)').matches) {
			this.mySwiper = this.tvSwiper();
			// this.mySwiper.push(this.tvSwiper());
		} else {
			this.mySwiper = this.desktopMonitorSwiper();
			// this.mySwiper.push(this.desktopMonitorSwiper());
		}
		console.log(this.mySwiper);
	}

	ngOnInit() {
		// this.swiperInit();
		// console.log(this.mySwiper);
	}

	initSwiperOnResize() {
		if (this.mySwiper != null) {
			this.mySwiper.forEach(
				(element: {
					destroy: (arg0: boolean, arg1: boolean) => void;
				}) => {
					element.destroy(true, true);
				}
			);
			this.swiperInit();
		}
	}

	ngAfterViewInit() {
		this.swiperInit();
		console.log(this.mySwiper);
		let swipercontainer = <HTMLElement>(
			document.querySelector('.billboard.swiper-container')
		);
		swipercontainer.style.background = 'black';
	}
	ngOnDestroy() {}
}
