import { Component, OnInit, Input } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

interface Item {
	netflixid?: string;
	title?: string;
	image?: string;
	synopsis?: string;
	rating?: string;
	type?: string;
	released?: string;
	runtime?: string;
	largeimage?: string;
	unogsdate?: string;
	imdbid?: string;
	download?: string;
}

@Component({
	selector: 'app-flip-card',
	templateUrl: './flip-card.component.html',
	styleUrls: ['./flip-card.component.css'],
})
export class FlipCardComponent implements OnInit {
	faPlayCircle = faPlayCircle;

	@Input() data: Item;
	@Input() colors: string;

	constructor() {}

	ngOnInit(): void {}
}
