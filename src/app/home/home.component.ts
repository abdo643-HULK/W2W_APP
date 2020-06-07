import {
	Component,
	OnInit,
	AfterViewInit /*HostListener, ElementRef , ViewChild, Renderer2*/,
	Inject,
	OnChanges,
	SimpleChanges,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Swiper, Navigation, Pagination } from 'swiper/js/swiper.esm.js';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';

// import { fromEvent, Observable, Subscription } from "rxjs";
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit, OnChanges {
	bgColor = 'black';
	mobile: boolean;
	mySwiper: Swiper | Swiper[] | any;

	constructor(@Inject(DOCUMENT) private _document, public dialog: MatDialog) {}
	ngOnChanges(changes: SimpleChanges): void {
		// throw new Error("Method not implemented.");
	}

	// mobileTabletSwiper() {
	// 	this.mySwiper = new Swiper('.home.swiper-container', {
	// 		direction: 'horizontal',
	// 		slidesPerView: 'auto',
	// 		spaceBetween: 10,
	// 		freeMode: true,
	// 		observer: true,
	// 		observeParents: true,
	// 		grabCursor: true,
	// 		mousewheel: true,
	// 	});
	// }

	// desktopMonitorSwiper() {
	// 	Swiper.use([Navigation, Pagination]);
	// 	this.mySwiper = new Swiper('.home.swiper-container', {
	// 		// lazy:true, //enables lazyloading add to html
	// 		// <img data-src="https://swiperjs.com/demos/images/nature-1.jpg" class="swiper-lazy">
	// 		// <!-- Preloader image -->
	// 		// <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
	// 		direction: 'vertical',
	// 		slidesPerView: 1,
	// 		slidesPerColumn: 3,
	// 		spaceBetween: 10,
	// 		simulateTouch: false,
	// 		observer: true,
	// 		observeParents: true,
	// 		pagination: {
	// 			el: '.swiper-pagination',
	// 			clickable: true,
	// 			dynamicBullets: true,
	// 		},
	// 		navigation: {
	// 			nextEl: '.swiper-button-next',
	// 			prevEl: '.swiper-button-prev',
	// 		},
	// 	});
	// }

	// tvSwiper() {
	// 	Swiper.use([Navigation, Pagination]);
	// 	this.mySwiper = new Swiper('.home.swiper-container', {
	// 		direction: 'horizontal',
	// 		slidesPerView: 6,
	// 		slidesPerGroup: 6,
	// 		simulateTouch: false,
	// 		spaceBetween: 10,
	// 		loop: true,
	// 		loopFillGroupWithBlank: true,
	// 		observer: true,
	// 		observeParents: true,
	// 		pagination: {
	// 			el: '.swiper-pagination',
	// 			clickable: true,
	// 		},
	// 		navigation: {
	// 			nextEl: '.swiper-button-next',
	// 			prevEl: '.swiper-button-prev',
	// 		},
	// 	});
	// }

	// swiperInit() {
	// 	const size = this.detectSize();
	// 	switch (size) {
	// 		case 1:
	// 			this.mobileTabletSwiper();

	// 			break;
	// 		case 2:
	// 			this.mobileTabletSwiper();

	// 			break;
	// 		case 3:
	// 			this.desktopMonitorSwiper();

	// 			break;
	// 		case 4:
	// 			this.tvSwiper();

	// 			break;
	// 		default:
	// 			this.mobileTabletSwiper();

	// 			break;
	// 	}
	// 	this.detectSize();
	// 	console.log(this.mySwiper);
	// }

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

	setMobile() {
		const size = this.detectSize();
		switch (size) {
			case 1:
				this.mobile = true;
				break;
			case 2:
				this.mobile = true;

				break;
			case 3:
				this.mobile = false;

				break;
			case 4:
				this.mobile = true;

				break;
			default:
				this.mobile = true;
				break;
		}
	}

	ngOnInit() {
		this._document.body.style.background = this.bgColor;
		this.setMobile();
		// this.swiperInit();
		// console.log(this.mySwiper);
	}

	ngAfterViewInit() {
		// this.swiperInit();
		console.log(this.mySwiper);
	}

	// openDialog(): void {
	// 	const dialogRef = this.dialog.open(DialogComponent, {
	// 		width: '250px',
	// 		data: { name: this.name, animal: this.animal },
	// 	});

	// 	dialogRef.afterClosed().subscribe((result) => {
	// 		console.log('The dialog was closed');
	// 		this.animal = result;
	// 	});
	// }

	ngOnDestroy() {}
}
