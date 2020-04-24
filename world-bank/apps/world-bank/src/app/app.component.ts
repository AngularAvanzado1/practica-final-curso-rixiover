import { Component, OnInit } from '@angular/core';
import { SwUpdate}  from '@angular/service-worker'

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
    private swUpdate: SwUpdate
    )
     {
      this.checkVersionUpdates();
  }

  ngOnInit(): void {

      }

      private checkVersionUpdates() {
        if (this.swUpdate.isEnabled) {
          this.swUpdate.checkForUpdate().then(data => console.log(data));
          this.swUpdate.available.subscribe(event => {
            if (event.current.appData) {
                  const appData: any = event.current.appData;
                  let msg = `New version ${appData.version} available.`; msg += `${appData.changelog}.`;
                  msg += 'Reaload now?';
                  if (confirm(msg)) {
                      window.location.reload();
                     }
                }});
        } }

}
