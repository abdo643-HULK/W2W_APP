import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full',
		component: HomeComponent,
	},
	{
		path: 'netflix',
		loadChildren: () => import('./netflix/netflix.module').then((m) => m.NetflixModule),
	},
	{
		path: 'prime',
		loadChildren: () => import('./prime/prime.module').then((m) => m.PrimeModule),
	},
	{
		path: 'disney+',
		loadChildren: () => import('./disney-plus/disney-plus.module').then((m) => m.DisneyPlusModule),
	},
	{
		path: 'skyx',
		loadChildren: () => import('./sky-x/sky-x.module').then((m) => m.SkyXModule),
	},
	{
		path: 'contact',
		loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule),
	},
	{ path: '**', component: HomeComponent },
	// { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
