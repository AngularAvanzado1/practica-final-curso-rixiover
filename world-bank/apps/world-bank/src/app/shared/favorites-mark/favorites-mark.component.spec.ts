import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesMarkComponent } from './favorites-mark.component';
import { AppComponent } from '../../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from '../../../../../../libs/shared/ui/src/lib/ui.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FavoritesMarkComponent', () => {
  let component: FavoritesMarkComponent;
  let fixture: ComponentFixture<FavoritesMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesMarkComponent, AppComponent ],
      imports: [
        BrowserModule,
        UiModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
