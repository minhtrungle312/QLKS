import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MRoomDtlComponent } from './m-room-dtl.component';

describe('MRoomDtlComponent', () => {
  let component: MRoomDtlComponent;
  let fixture: ComponentFixture<MRoomDtlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MRoomDtlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MRoomDtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
