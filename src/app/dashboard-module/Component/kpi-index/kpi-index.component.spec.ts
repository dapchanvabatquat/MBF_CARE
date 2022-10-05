import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KPIIndexComponent } from './kpi-index.component';

describe('KPIIndexComponent', () => {
  let component: KPIIndexComponent;
  let fixture: ComponentFixture<KPIIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KPIIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KPIIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
