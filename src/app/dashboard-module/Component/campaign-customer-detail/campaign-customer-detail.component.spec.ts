import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignCustomerDetailComponent } from './campaign-customer-detail.component';

describe('CampaignCustomerDetailComponent', () => {
  let component: CampaignCustomerDetailComponent;
  let fixture: ComponentFixture<CampaignCustomerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignCustomerDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignCustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
