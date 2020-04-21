import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as FavoritesMethodActions from './favorites-method.actions';
import { initialState } from './favorites-method.reducer';



@Injectable()
export class FavoritesMethodEffects {

  private storeKey = "favoritesMethodList"

  // loadFavoritesMethods$ = createEffect(() => {
  //   return this.actions$.pipe(

  //     ofType(FavoritesMethodActions.loadFavoritesMethods),
  //     concatMap(() =>
  //       /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //       EMPTY.pipe(
  //         map(data => FavoritesMethodActions.loadFavoritesMethodsSuccess({ data })),
  //         catchError(error => of(FavoritesMethodActions.loadFavoritesMethodsFailure({ error }))))
  //     )
  //   );
  // });

  public loadFavoritesMethods$ = createEffect(() => this.actions$.pipe(
    ofType(FavoritesMethodActions.loadFavoritesMethods),
    concatMap(() => {
      try {
        let storedList = JSON.parse(window.localStorage.getItem(this.storeKey));
        if (!storedList) {
          storedList = initialState.favoritesMethods.list; window.localStorage.setItem(
            this.storeKey,
            JSON.stringify(storedList)
          );
        }
        return of(
          FavoritesMethodActions.loadFavoritesMethodsSuccess({favoritesMethodList: storedList})
        );
      } catch (e) {
        return of(
          FavoritesMethodActions.loadFavoritesMethodsFailure);
        }
    })
  ));

  constructor(private actions$: Actions) {}

}
