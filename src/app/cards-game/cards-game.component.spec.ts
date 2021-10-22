import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsGameComponent } from './cards-game.component';

describe('CardsGameComponent', () => {
  let component: CardsGameComponent;
  let fixture: ComponentFixture<CardsGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
