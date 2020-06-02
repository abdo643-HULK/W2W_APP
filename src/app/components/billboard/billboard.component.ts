import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import Swiper from 'swiper';
import { REC_CONTENT } from '../../data/list';

interface DATA {
	title: string;
	image: string;
	synopsis?: string;
}

@Component({
	selector: 'app-billboard',
	templateUrl: './billboard.component.html',
	styleUrls: ['./billboard.component.css']
})
export class BillboardComponent implements OnInit, AfterViewInit {
	rec = REC_CONTENT;
	startSwiper: Swiper;

	constructor() {}

	swiperMobile() {
		this.startSwiper = new Swiper('.billboard.swiper-container', {
			speed: 600,
			effect: 'fade',
			grabCursor: true,
			parallax: true,
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			}
		});
	}

	swiperDesktop() {
		this.startSwiper = new Swiper('.billboard.swiper-container', {
			speed: 600,
			autoHeight: true,
			simulateTouch: false,
			effect: 'fade',
			parallax: true,
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			}
		});
	}

	swiperTV() {
		this.startSwiper = new Swiper('.billboard.swiper-container', {
			speed: 600,
			autoHeight: true,
			simulateTouch: false,
			parallax: true,
			effect: 'fade',
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			}
		});
	}

	swiperInit() {
		/*Swiper.use([Navigation, Pagination, Scrollbar, Autoplay,Parallax,EffectFade]);*/
		if (window.matchMedia('(max-width: 1027px)').matches) {
			this.swiperMobile();
		} else if (
			window.matchMedia(
				'(min-width: 1028px) and (max-width: 1599px) and (orientation: portrait)'
			).matches
		) {
			this.swiperMobile();
		} else if (
			window.matchMedia(
				'(min-width: 1028px) and (max-width: 1599px) and (orientation: landscape)'
			).matches
		) {
			this.swiperDesktop();
		} else if (
			window.matchMedia(
				'(min-width: 1600px) and (orientation: landscape)'
			).matches
		) {
			this.swiperTV();
		} else {
			this.swiperDesktop();
		}
	}

	ngOnInit() {}
	ngAfterViewInit() {
		this.swiperInit();
		console.log(this.startSwiper);
	}
	// ngOnChanges() {
	// 	this.startSwiper.destroy(true, true);
	// 	this.swiperInit();
	// }
}
