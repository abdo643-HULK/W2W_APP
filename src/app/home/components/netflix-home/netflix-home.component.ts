import {
	Component,
	OnInit,
	ElementRef,
	EventEmitter,
	Input,
	Output,
	AfterViewInit,
	Renderer2,
	ViewChild,
} from '@angular/core';
import {
	HttpClient,
	HttpHeaders,
	HttpParams,
	HttpResponse,
} from '@angular/common/http';
import { map, switchMap, debounceTime, distinct, filter } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
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
	days = '7';
	country = 'DE';
	dataValue: Observable<Item[]>;
	expire: Observable<Item[]>;
	results: Observable<string[]>;
	latestSearch = new Subject<string>();
	cardStyle = 'white';

	private isDataAvailable: boolean = false;
	@ViewChild('SwiperWrapperCS') cs: ElementRef;
	@ViewChild('SwiperWrapperLS') ls: ElementRef;
	@Output() tab = new EventEmitter();

	headers = new HttpHeaders()
		.set('x-rapidapi-host', 'unogs-unogs-v1.p.rapidapi.com')
		.set(
			'x-rapidapi-key',
			'2e75f12489msh4881df0eea4530ap1d9974jsnb1c9075c37c4'
		)
		.append('Content-Type', 'application/json');

	constructor(
		private http: HttpClient /*, public element: ElementRef, private rd: Renderer2*/
	) {
		// this.getNew();
		// this.getLeaving();
	}

	getSearch(term: string) {
		this.latestSearch.next(term);
		this.results = this.latestSearch.pipe(
			debounceTime(500),
			distinct(),
			filter((term) => !!term),
			switchMap((term) =>
				this.http
					.get<NetflixData>(`${term}`)
					.pipe(
						map((csdata) => csdata.ITEMS.map((item) => item.title))
					)
			)
		);
	}

	getNew() {
		const url = `https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew${
			this.days || 7
		}%3A${this.country || 'DE'}&p=1&t=ns&st=adv`;
		this.dataValue = this.http
			.get<NetflixData>(url, { headers: this.headers })
			.pipe(map((csdata) => csdata.ITEMS));
	}
	// getLeaving() : Observable<NetflixData[]>{
	getLeaving() {
		const url =
			'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Aexp%3ADE&t=ns&st=adv&p=1';
		this.expire = this.http
			.get<NetflixData>(url, { headers: this.headers })
			.pipe(map((lsdata) => lsdata.ITEMS || []));
	}

	ngOnInit() {}

	openTab(evt, tabName: string, swipertab: string, servicetab: string) {
		var i: number,
			x,
			tablinks: HTMLCollectionOf<Element> | { className: string }[];
		x = document.getElementsByClassName(swipertab);
		for (i = 0; i < x.length; i++) {
			x[i].style.display = 'none';
		}
		tablinks = document.getElementsByClassName(servicetab);
		for (i = 0; i < x.length; i++) {
			tablinks[i].classList.remove('is-active');
		}
		document.getElementById(tabName).style.display = '';
		evt.currentTarget.className += ' is-active';
	}

	ngAfterViewInit() {}
}
