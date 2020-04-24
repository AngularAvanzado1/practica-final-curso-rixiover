import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from '../../app.component';
import { CountriesComponent } from '../countries/countries.component';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from '../../../../../../libs/shared/ui/src/lib/ui.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FavoritesMarkComponent } from '../../shared/favorites-mark/favorites-mark.component';
import { CardComponent } from '../../shared/card/card.component';
import { Store, StateObservable } from '@ngrx/store';

describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CountriesComponent, FavoritesMarkComponent, CardComponent],
      imports: [
        BrowserModule,
        UiModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        Store,
        StateObservable
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
