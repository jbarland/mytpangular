import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CregionComponent } from './cregion.component';

describe('CregionComponent', () => {
  let component: CregionComponent;
  let fixture: ComponentFixture<CregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CregionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
