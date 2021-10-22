import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmultabComponent } from './allmultab.component';

describe('AllmultabComponent', () => {
  let component: AllmultabComponent;
  let fixture: ComponentFixture<AllmultabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllmultabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmultabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
