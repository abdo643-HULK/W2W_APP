import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
	selector: 'app-sky-x',
	templateUrl: './sky-x.component.html',
	styleUrls: ['./sky-x.component.css'],
})
export class SkyXComponent implements OnInit {
	constructor(private meta: Meta, private location: Location) {}

	ngOnInit(): void {
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
