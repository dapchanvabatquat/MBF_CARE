import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSubjectComponent } from './customer-subject.component';

describe('CustomerSubjectComponent', () => {
  let component: CustomerSubjectComponent;
  let fixture: ComponentFixture<CustomerSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
