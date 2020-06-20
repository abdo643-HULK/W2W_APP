import { Component, OnInit, ElementRef, EventEmitter, Input, Output, AfterViewInit, Renderer2, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { map, switchMap, debounceTime, distinct, filter } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
// import { Observable } from 'rxjs/internal/Observable';

/*import { isPlatformBrowser } from '@angular/common';*/

interface NetflixData {
	count: string;
	ITEMS: Item[];
	proto: any;
}

interface Item {
	netflixid: string;
	title: string;
	image: string;
	synopsis: string;
	rating: string;
	type: string;
	released: string;
	runtime: string;
	largeimage: string;
	unogsdate: string;
	imdbid: string;
	download: string;
}

@Component({
	selector: 'app-netflix-home',
	templateUrl: './netflix-home.component.html',
	styleUrls: ['./netflix-home.component.css'],
})
export class NetflixHomeComponent implements OnInit {
	@Input() mobile: boolean;

	days = '7';
	country = 'DE';
	dataValue$: Observable<Item[]>;
	expire$: Observable<Item[]>;
	results$: Observable<string[]>;
	latestSearch = new Subject<string>();
	cardStyle = 'white';

	private isDataAvailable: boolean = false;
	@Output() tab = new EventEmitter();

	headers = new HttpHeaders()
		.set('x-rapidapi-host', `${environment.API_HOST}`)
		.set('x-rapidapi-key', `${environment.API_KEY}`)
		.append('Content-Type', 'application/json');
	site: string;

	constructor(private http: HttpClient /*, public element: ElementRef, private rd: Renderer2*/) {
		// this.getNew();
		// this.getLeaving();
	}

	getSearch(term: string) {
		this.latestSearch.next(term);
		this.results$ = this.latestSearch.pipe(
			debounceTime(500),
			distinct(),
			filter((term) => !!term),
			switchMap((term) => this.http.get<NetflixData>(`${term}`).pipe(map((csdata) => csdata.ITEMS.map((item) => item.title))))
		);
	}

	getNew() {
		const url = `${environment.API_URL}new${this.days || 7}%3A${this.country || 'DE'}&p=1&t=ns&st=adv`;
		this.dataValue$ = this.http
			.get<NetflixData>(url, { headers: this.headers })
			.pipe(map((csdata) => csdata.ITEMS));
	}
	// getLeaving() : Observable<NetflixData[]>{
	getLeaving() {
		const url = `${environment.API_URL}exp%3${this.country || 'DE'}&t=ns&st=adv&p=${this.site || '1'}`;
		this.expire$ = this.http
			.get<NetflixData>(url, { headers: this.headers })
			.pipe(map((lsdata) => lsdata.ITEMS || []));
	}

	ngOnInit() {}

	ngAfterViewInit() {}
}
