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
	selector: 'app-swiper-slide',
	templateUrl: './swiper-slide.component.html',
	styleUrls: ['./swiper-slide.component.css']
})
export class SwiperSlideComponent implements OnInit {
	faPlayCircle = faPlayCircle;

	@Input() data: Item;

	constructor() {}

	ngOnInit(): void {}
}
