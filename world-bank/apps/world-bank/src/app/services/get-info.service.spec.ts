import { TestBed } from '@angular/core/testing';

import { GetInfoService } from './get-info.service';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from '../../../../../libs/shared/ui/src/lib/ui.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FavoritesMarkComponent } from '../shared/favorites-mark/favorites-mark.component';

describe('GetInfoService', () => {
  let service: GetInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, FavoritesMarkComponent],
      imports: [
        BrowserModule,
        UiModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]});
    service = TestBed.inject(GetInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
