import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../../services/get-info.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FavoritesMethod } from '../../favorites/store/favorites-method/favorites-method.model';
import { FavoritesMethodService } from '../../favorites/store/favorites-method/favorites-method.service';

@Component({
  selector: 'world-bank-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public favoritesMethodsList$: Observable<FavoritesMethod[]>;

  regionData = [];
  regionDataFiltered = [];

  numberFavorites;

  constructor( private getInfoService: GetInfoService,
               private router: Router,

  ) { }

  ngOnInit(): void {
    this.getInfoService.getRegions().subscribe(data => {
      this.regionData = data[1];
      for (let i = 0; i < this.regionData.length; i++) {
        if(this.regionData[i].id !== "") {
          this.regionDataFiltered.push(this.regionData[i]);
        }
      }
      console.log(this.regionDataFiltered);

  });
  }

  goToRegion(i) {
    console.log('is working!', i);
    this.router.navigate(['/region', i]);
  }

  goToFavorites(){
    this.router.navigateByUrl('/favorites');
  }

}
