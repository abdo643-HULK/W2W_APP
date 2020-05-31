import { Component, OnInit } from '@angular/core';
import { LEAVING_CONTENT, COMING_CONTENT } from '../../../../data/list';
@Component({
	selector: 'app-prime-home',
	templateUrl: './prime-home.component.html',
	styleUrls: ['./prime-home.component.css']
})
export class PrimeHomeComponent implements OnInit {
	data = COMING_CONTENT;
	expire = LEAVING_CONTENT;
	constructor() {}
	ngOnInit() {}
	openTab(evt, tabName, swipertab, servicetab) {
		var i, x, tablinks;
		x = document.getElementsByClassName(swipertab);
		for (i = 0; i < x.length; i++) {
			x[i].style.display = 'none';
		}
		tablinks = document.getElementsByClassName(servicetab);
		for (i = 0; i < x.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(
				' is-active',
				''
			);
		}
		document.getElementById(tabName).style.display = '';
		evt.currentTarget.className += ' is-active';
	}
}
