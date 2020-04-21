import { Component, OnInit } from '@angular/core';

import { FavoritesMethod } from './favorites/store/favorites-method/favorites-method.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'world-bank-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'world-bank';


  public favoritesMethodsList$: Observable<FavoritesMethod[]>;

  constructor(

    ){
  }

  ngOnInit(): void {

      }


}
