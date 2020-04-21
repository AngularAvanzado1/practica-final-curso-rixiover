import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RegionsComponent } from './views/regions/regions.component';
import { CountriesComponent } from './views/countries/countries.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'region/:code', component: RegionsComponent},
  {path: 'country/:code', component: CountriesComponent},
  {path: 'favorites', component: FavoritesComponent},
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'favorites', loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
