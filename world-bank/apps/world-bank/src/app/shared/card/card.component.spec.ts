import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from '../../../../../../libs/shared/ui/src/lib/ui.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FavoritesMethodService } from '../../favorites/store/favorites-method/favorites-method.service';
import { GetInfoService } from '../../services/get-info.service';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent, FavoritesMethodService, GetInfoService ],
      imports: [
        BrowserModule,
        UiModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
