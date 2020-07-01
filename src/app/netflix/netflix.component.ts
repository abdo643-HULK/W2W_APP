import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
	selector: 'app-netflix',
	templateUrl: './netflix.component.html',
	styleUrls: ['./netflix.component.css'],
})
export class NetflixComponent implements OnInit {
	bgColor = '#141414';
	constructor(@Inject(DOCUMENT) private _document) {}

	ngOnInit(): void {
		this._document.body.style.background = this.bgColor;
	}
}
