import {
	Component,
	OnInit,
	AfterViewInit /*HostListener, ElementRef , ViewChild, Renderer2*/,
	Inject,
	OnChanges,
	SimpleChanges,
	HostListener,
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

	@HostListener('window:resize') reInit() {
		this.setMobile();
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
