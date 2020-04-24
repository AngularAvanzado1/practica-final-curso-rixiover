import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../../services/get-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FavoritesMethod } from '../../favorites/store/favorites-method/favorites-method.model';
import { FavoritesMethodService } from '../../favorites/store/favorites-method/favorites-method.service';


@Component({
  selector: 'world-bank-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public favoritesMethodsList$: Observable<FavoritesMethod[]>;
  public preferredFavoritesMethod$: Observable<string>;

  countryData = [];
  code;

  constructor( private getInfoService: GetInfoService,
               private activatedRouter: ActivatedRoute,
               private router: Router,
               private favoritesMethodService: FavoritesMethodService
  ) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      this.getInfoService.getInfoCountry(params['code']).subscribe(data => {
      this.countryData = data[1];
      console.log(this.countryData);
      });
    })
  }

  goToRegion(i) {
    console.log('is working!', i);
    this.router.navigate(['/region', i]);
  }

  addToFavorites() {
    this.favoritesMethodService.loadFavoritesMethods(); const favoriteCountry: FavoritesMethod = {
      id: this.countryData[0].id,
      name: this.countryData[0].name
    };
      this.favoritesMethodService.addFavoritesMethod(favoriteCountry);

      this.router.navigate(['/favorites']);

  }

}
