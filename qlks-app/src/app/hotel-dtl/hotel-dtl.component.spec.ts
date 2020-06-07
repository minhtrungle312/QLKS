import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDtlComponent } from './hotel-dtl.component';

describe('HotelDtlComponent', () => {
  let component: HotelDtlComponent;
  let fixture: ComponentFixture<HotelDtlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelDtlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
