import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MHotelDtlComponent } from './m-hotel-dtl.component';

describe('MHotelDtlComponent', () => {
  let component: MHotelDtlComponent;
  let fixture: ComponentFixture<MHotelDtlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MHotelDtlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MHotelDtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
