import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFavoritesMethod from './favorites-method.reducer';

export const getFavoritesMethodState = createFeatureSelector<fromFavoritesMethod.State>(
  fromFavoritesMethod.favoritesMethodFeatureKey
);

export const getFavoritesMethodsList = createSelector( getFavoritesMethodState,
  (state: fromFavoritesMethod.State) => state.favoritesMethods.list
  );

export const getPreferredFavoritesMethod = createSelector( getFavoritesMethodState,
  (state: fromFavoritesMethod.State) => state.favoritesMethods.preferredId
  );
