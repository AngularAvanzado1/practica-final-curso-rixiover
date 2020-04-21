import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import { StoreModule } from '@ngrx/store';
import * as fromFavoritesMethod from './store/favorites-method/favorites-method.reducer';
import { FavoritesMethodEffects } from './store/favorites-method/favorites-method.effects';


@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    StoreModule.forFeature(
      fromFavoritesMethod.favoritesMethodFeatureKey,
      fromFavoritesMethod.reducer),
    EffectsModule.forFeature([FavoritesMethodEffects])
  ]
})
export class FavoritesModule { }
