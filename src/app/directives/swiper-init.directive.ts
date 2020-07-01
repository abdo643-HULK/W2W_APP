import { Directive, OnInit, Inject, Renderer2, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Swiper, Navigation, Pagination } from 'swiper/js/swiper.esm.js';
import { DOCUMENT } from '@angular/common';

@Directive({
	selector: '[SwiperInit]',
})
export class SwiperInitDirective implements OnInit, AfterViewInit {
	swiper = this.el.nativeElement;
	mySwiper: Swiper;
	constructor(@Inject(DOCUMENT) private _document, private renderer: Renderer2, private el: ElementRef) {}
	ngOnInit() {
		console.log(this.el);
		// this.swiperInit();
	}

	ngAfterViewInit() {
		this.swiperInit();
	}

	@HostListener('window:resize') reInitSwiper() {
		console.log('resize');
		this.mySwiper.destroy(true, true);
		this.swiperInit();
	}

	swiperInit() {
		const size = this.detectSize();
		switch (size) {
			case 1:
				this.mobileTabletSwiper();

				break;
			case 2:
				this.mobileTabletSwiper();

				break;
			case 3:
				this.desktopMonitorSwiper();

				break;
			case 4:
				this.tvSwiper();

				break;
			default:
				this.mobileTabletSwiper();

				break;
		}
	}

	detectSize() {
		if (window.matchMedia('(max-width: 1023px)').matches) {
			return 1;
		} else if (window.matchMedia('(min-width: 1024px) and (max-width: 1439px) and (orientation: portrait)').matches) {
			return 2;
		} else if (window.matchMedia('(min-width: 1024px) and (max-width: 2200px) and (orientation: landscape)').matches) {
			return 3;
		} else if (window.matchMedia('(min-width: 2201px)').matches) {
			return 4;
		} else {
			return;
		}
	}

	mobileTabletSwiper() {
		this.mySwiper = new Swiper(this.swiper, {
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
		this.mySwiper = new Swiper(this.swiper, {
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
		this.mySwiper = new Swiper(this.swiper, {
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
}
