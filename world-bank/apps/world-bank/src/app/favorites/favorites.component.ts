import { Component, OnInit } from '@angular/core';
import { FavoritesMethodService } from './store/favorites-method/favorites-method.service';
import { FavoritesMethod } from './store/favorites-method/favorites-method.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'world-bank-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  public favoritesMethodsList$: Observable<FavoritesMethod[]>;
  public favoritesCountries;

  constructor( private favoritesMethodService: FavoritesMethodService,
               private router: Router
  ) { }

  ngOnInit(): void {

      this.favoritesMethodsList$ = this.favoritesMethodService.getFavoritesMethodsList$();
      this.favoritesMethodsList$.subscribe(data => {
        console.log(data);
        this.favoritesCountries = data;
      })

  }

  goToHome(){
    this.router.navigateByUrl('/');
  }

  check(){
    this.favoritesMethodsList$.subscribe(data => console.log(data));
  }

}
