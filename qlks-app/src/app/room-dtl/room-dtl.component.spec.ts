import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDtlComponent } from './room-dtl.component';

describe('RoomDtlComponent', () => {
  let component: RoomDtlComponent;
  let fixture: ComponentFixture<RoomDtlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomDtlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
