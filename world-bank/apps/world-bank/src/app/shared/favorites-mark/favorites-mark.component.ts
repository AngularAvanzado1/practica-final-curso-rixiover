import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoritesMethod } from '../../favorites/store/favorites-method/favorites-method.model';
import { FavoritesMethodService } from '../../favorites/store/favorites-method/favorites-method.service';

@Component({
  selector: 'world-bank-favorites-mark',
  templateUrl: './favorites-mark.component.html',
  styleUrls: ['./favorites-mark.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesMarkComponent implements OnInit {

  numberFavorites;

  public favoritesMethodsList$: Observable<FavoritesMethod[]>;

  constructor(
    private favoritesMethodService: FavoritesMethodService,
    private cd: ChangeDetectorRef
    ){
  }
  ngOnInit(): void {
    this.favoritesMethodsList$ = this.favoritesMethodService.getFavoritesMethodsList$();
      this.favoritesMethodsList$.subscribe( (favoritesData) => {
        this.numberFavorites = favoritesData.length;
        this.cd.markForCheck();
      })
  }

}
