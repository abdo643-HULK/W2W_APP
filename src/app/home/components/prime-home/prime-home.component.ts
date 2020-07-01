import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { LEAVING_CONTENT, COMING_CONTENT } from '../../../data/list';

@Component({
	selector: 'app-prime-home',
	templateUrl: './prime-home.component.html',
	styleUrls: ['./prime-home.component.css'],
})
export class PrimeHomeComponent implements OnInit {
	serviceLogo = './assets/Prime_Video1.png';
	data = COMING_CONTENT;
	expire = LEAVING_CONTENT;
	cardStyle = 'white';
	@ViewChild('tabs', { static: false }) tabs;

	@Input() mobile: boolean;
	@Output() expireData = this.expire;

	constructor() {}
	ngOnInit() {
		// this.tabs.realignInkBar();
		// this.expireData = {
		// 	expire: this.expire,
		// 	cardStyle: this.cardStyle,
		// 	mobile: this.mobile,
		// };
	}
}
