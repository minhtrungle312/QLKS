import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementRoomListComponent } from './management-room-list.component';

describe('ManagementRoomListComponent', () => {
  let component: ManagementRoomListComponent;
  let fixture: ComponentFixture<ManagementRoomListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementRoomListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementRoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
