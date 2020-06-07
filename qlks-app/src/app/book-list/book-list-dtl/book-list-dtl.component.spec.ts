import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListDtlComponent } from './book-list-dtl.component';

describe('BookListDtlComponent', () => {
  let component: BookListDtlComponent;
  let fixture: ComponentFixture<BookListDtlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListDtlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListDtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
