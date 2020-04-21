import { Action, createReducer, on } from '@ngrx/store';
import * as FavoritesMethodActions from './favorites-method.actions';
import { FavoritesMethods, FavoritesMethod } from './favorites-method.model';

export const favoritesMethodFeatureKey = 'favoritesMethod';

export interface State {
  favoritesMethods: FavoritesMethods;
}

export const initialState: State = {
  favoritesMethods: { list: [], preferredId: null }
};

const favoritesMethodReducer = createReducer(
  initialState,

  on(FavoritesMethodActions.loadFavoritesMethods, state => state),

  on(
    FavoritesMethodActions.loadFavoritesMethodsSuccess, (state, { favoritesMethodList }) => {
    return {
    ...state,
    favoriteMethods: { ...state.favoritesMethods, list: favoritesMethodList }
    }; }
    ),

  on(FavoritesMethodActions.loadFavoritesMethodsFailure, state => state),

  on(FavoritesMethodActions.addFavoritesMethod, (state, { newFavoritesMethod }) => {
    return {
    ...state, favoritesMethods: {
      ...state.favoritesMethods,
    list: [...state.favoritesMethods.list, newFavoritesMethod]
    } };
    }),

    on( FavoritesMethodActions.selectPreferredFavoritesMethod, (state, { preferredId }) => {
      return {
      ...state,
      favoritesMethods: { ...state.favoritesMethods, preferredId: preferredId }
    }; }
    ),


);

export function reducer(state: State | undefined, action: Action) {
  return favoritesMethodReducer(state, action);
}
