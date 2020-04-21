import { createAction, props } from '@ngrx/store';
import { FavoritesMethod } from './favorites-method.model';

export const loadFavoritesMethods = createAction(
  '[FavoritesMethod] Load FavoritesMethods'
);

export const loadFavoritesMethodsSuccess = createAction(
  '[FavoritesMethod] Load FavoritesMethods Success',
  props<{ favoritesMethodList: FavoritesMethod }>()
);

export const loadFavoritesMethodsFailure = createAction(
  '[FavoritesMethod] Load FavoritesMethods Failure',
  props<{ error: any }>()
);

export const addFavoritesMethod = createAction( '[Favorites] Add FavoriteMethod',
props<{ newFavoritesMethod: FavoritesMethod }>()
);

export const selectPreferredFavoritesMethod = createAction( '[FavoritesMethod] Select preferred FavoriteMethod', props<{ preferredId: string }>()
);
