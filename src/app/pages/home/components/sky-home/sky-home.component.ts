import { Component, OnInit } from '@angular/core';
import { LEAVING_CONTENT, COMING_CONTENT } from '../../../../data/list';

@Component({
	selector: 'app-sky-home',
	templateUrl: './sky-home.component.html',
	styleUrls: ['./sky-home.component.css']
})
export class SkyHomeComponent implements OnInit {
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
