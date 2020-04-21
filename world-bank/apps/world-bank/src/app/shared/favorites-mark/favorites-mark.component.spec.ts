import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesMarkComponent } from './favorites-mark.component';

describe('FavoritesMarkComponent', () => {
  let component: FavoritesMarkComponent;
  let fixture: ComponentFixture<FavoritesMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesMarkComponent ]
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
