import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { AppComponent } from '../../app.component';
import { RegionsComponent } from '../regions/regions.component';
import { CountriesComponent } from '../countries/countries.component';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from '../../../../../../libs/shared/ui/src/lib/ui.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FavoritesMarkComponent } from '../../shared/favorites-mark/favorites-mark.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, HomeComponent, FavoritesMarkComponent],
      imports: [
        BrowserModule,
        UiModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
