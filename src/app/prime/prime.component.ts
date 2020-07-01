import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
	selector: 'app-prime',
	templateUrl: './prime.component.html',
	styleUrls: ['./prime.component.css'],
})
export class PrimeComponent implements OnInit {
	bgColor = '#0f171e';

	constructor(@Inject(DOCUMENT) private _document) {}

	ngOnInit(): void {
		this._document.body.style.background = this.bgColor;
	}
}
