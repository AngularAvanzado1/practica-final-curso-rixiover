import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from '../../../../libs/shared/ui/src/lib/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RegionsComponent } from './views/regions/regions.component';
import { CountriesComponent } from './views/countries/countries.component';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterState, routerReducer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FavoritesModule } from './favorites/favorites.module';
import * as fromFavoritesMethod from './favorites/store/favorites-method/favorites-method.reducer';
import { FavoritesMethodEffects } from './favorites/store/favorites-method/favorites-method.effects';
import { FavoritesMarkComponent } from './shared/favorites-mark/favorites-mark.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegionsComponent,
    CountriesComponent,
    FavoritesMarkComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        router: routerReducer
      },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
    StoreModule.forFeature(
      fromFavoritesMethod.favoritesMethodFeatureKey,
      fromFavoritesMethod.reducer),
    EffectsModule.forRoot([FavoritesMethodEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
