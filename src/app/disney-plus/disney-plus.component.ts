import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
	selector: 'app-disney-plus',
	templateUrl: './disney-plus.component.html',
	styleUrls: ['./disney-plus.component.css'],
})
export class DisneyPlusComponent implements OnInit {
	bgColor = '#212433';

	constructor(@Inject(DOCUMENT) private _document) {}

	ngOnInit(): void {
		this._document.body.style.background = this.bgColor;
	}
}
