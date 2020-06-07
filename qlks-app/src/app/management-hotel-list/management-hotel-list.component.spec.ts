import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementHotelListComponent } from './management-hotel-list.component';

describe('ManagementHotelListComponent', () => {
  let component: ManagementHotelListComponent;
  let fixture: ComponentFixture<ManagementHotelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementHotelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementHotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
