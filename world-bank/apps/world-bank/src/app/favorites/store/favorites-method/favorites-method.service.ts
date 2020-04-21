import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as FavoritesMethodActions from './favorites-method.actions';
import * as FavoritesMethodSelectors from './favorites-method.selectors';
import { FavoritesMethod } from './favorites-method.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FavoritesMethodService {

  constructor(private store: Store) {}

  public loadFavoritesMethods() { this.store.dispatch(FavoritesMethodActions.loadFavoritesMethods());
  }

  public addFavoritesMethod(newFavoritesMethod: FavoritesMethod) {
    this.store.dispatch(
      FavoritesMethodActions.addFavoritesMethod({
      newFavoritesMethod: { ...newFavoritesMethod } })
    ); }

  public selectPreferredFavoritesMethod(preferredId: string) { this.store.dispatch(
    FavoritesMethodActions.selectPreferredFavoritesMethod({ preferredId }) );
    }

  public getFavoritesMethodsList$(): Observable<FavoritesMethod[]> {
    return this.store.select(FavoritesMethodSelectors.getFavoritesMethodsList);
    }
    public getPreferredFavoritesMethod$(): Observable<string> {
    return this.store.select(FavoritesMethodSelectors.getPreferredFavoritesMethod);
    }

}
