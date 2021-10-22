import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultabComponent } from './multab.component';

describe('MultabComponent', () => {
  let component: MultabComponent;
  let fixture: ComponentFixture<MultabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
