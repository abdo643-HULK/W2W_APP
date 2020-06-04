import { Meta } from '@angular/platform-browser';
import { Component, OnInit, Inject } from '@angular/core';
import { Location, DOCUMENT } from '@angular/common';

@Component({
	selector: 'app-sky-x',
	templateUrl: './sky-x.component.html',
	styleUrls: ['./sky-x.component.css'],
})
export class SkyXComponent implements OnInit {
	bgColor = '#10599e';
	constructor(
		private meta: Meta,
		private location: Location,
		@Inject(DOCUMENT) private _document
	) {}

	ngOnInit(): void {
		this._document.body.style.background = this.bgColor;
		this.meta.updateTag({ name: 'title', content: '' });
		this.meta.updateTag({
			name: 'description',
			content: `Lorem ipsum dolor`,
		});
		this.meta.updateTag({
			name: 'image',
			content: './assets/blogimage.jpg',
		});
		this.meta.updateTag({ name: 'site', content: 'My Site' });
	}
	// navigateTo(url) {
	// 	this.location.go(url);
	// }
	// goBack() {
	// 	this.location.back();
	// }
	// goForward() {
	// 	this.location.forward();
	// }
}
