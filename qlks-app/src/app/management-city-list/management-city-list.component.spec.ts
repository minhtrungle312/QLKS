import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementCityListComponent } from './management-city-list.component';

describe('ManagementCityListComponent', () => {
  let component: ManagementCityListComponent;
  let fixture: ComponentFixture<ManagementCityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementCityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementCityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
