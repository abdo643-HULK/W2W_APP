import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full',
		component: HomeComponent,
	},
	{
		path: 'contact',
		component: ContactComponent,
	},
	{
		path: 'netflix',
		loadChildren: () =>
			import('./netflix/netflix.module').then((m) => m.NetflixModule),
	},
	{
		path: 'prime',
		loadChildren: () =>
			import('./prime/prime.module').then((m) => m.PrimeModule),
	},
	{
		path: 'disney-plus',
		loadChildren: () =>
			import('./disney-plus/disney-plus.module').then(
				(m) => m.DisneyPlusModule
			),
	},
	{
		path: 'sky-x',
		loadChildren: () =>
			import('./sky-x/sky-x.module').then((m) => m.SkyXModule),
	},
	{ path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
