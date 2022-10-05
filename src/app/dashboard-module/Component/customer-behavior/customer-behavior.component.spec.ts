import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBehaviorComponent } from './customer-behavior.component';

describe('CustomerBehaviorComponent', () => {
  let component: CustomerBehaviorComponent;
  let fixture: ComponentFixture<CustomerBehaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerBehaviorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
