import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MCityDtlComponent } from './m-city-dtl.component';

describe('MCityDtlComponent', () => {
  let component: MCityDtlComponent;
  let fixture: ComponentFixture<MCityDtlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MCityDtlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MCityDtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
