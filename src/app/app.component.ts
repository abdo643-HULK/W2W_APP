import { Component } from '@angular/core';
import {
	NavigationEnd,
	NavigationStart,
	RouterEvent,
	Router,
} from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'W2W';
	loading: boolean;
	constructor(router: Router) {
		this.loading = false;
		router.events.subscribe((event: RouterEvent): void => {
			if (event instanceof NavigationStart) {
				this.loading = true;
			} else if (event instanceof NavigationEnd) {
				this.loading = false;
			}
		});
	}
}
