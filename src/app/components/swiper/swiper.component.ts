import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
interface Data {
	inputData: [];
	cardStyle: any;
	mobile: boolean;
}
@Component({
	selector: 'home-swiper',
	templateUrl: './swiper.component.html',
	styleUrls: ['./swiper.component.css'],
})
export class SwiperComponent implements OnInit, AfterViewInit {
	@Input() data: Data;
	@Input() inputData;
	cardStyle;
	mobile;

	constructor() {}

	ngOnInit(): void {
		console.log(this.data.inputData);
		// this.inputData = this.data.inputData;
		this.cardStyle = this.data.cardStyle;
		this.mobile = this.data.mobile;
	}
	ngAfterViewInit() {}
}
