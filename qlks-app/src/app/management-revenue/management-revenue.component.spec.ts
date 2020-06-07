import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementRevenueComponent } from './management-revenue.component';

describe('ManagementRevenueComponent', () => {
  let component: ManagementRevenueComponent;
  let fixture: ComponentFixture<ManagementRevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementRevenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
