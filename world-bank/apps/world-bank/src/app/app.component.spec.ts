import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { RegionsComponent } from './views/regions/regions.component';
import { CountriesComponent } from './views/countries/countries.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UiModule } from '../../../../libs/shared/ui/src/lib/ui.module';
import { CardComponent } from './shared/card/card.component';
import { FavoritesMarkComponent } from './shared/favorites-mark/favorites-mark.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SwUpdate } from '@angular/service-worker';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, HomeComponent, RegionsComponent, CountriesComponent, CardComponent, FavoritesMarkComponent, FavoritesComponent],
      imports: [
        BrowserModule,
        UiModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        SwUpdate,
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'world-bank'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('world-bank');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to world-bank!'
    );
  });
});
