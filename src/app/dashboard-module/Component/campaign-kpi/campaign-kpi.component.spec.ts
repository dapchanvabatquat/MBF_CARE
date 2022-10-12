import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignKpiComponent } from './campaign-kpi.component';

describe('CampaignKpiComponent', () => {
  let component: CampaignKpiComponent;
  let fixture: ComponentFixture<CampaignKpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignKpiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
