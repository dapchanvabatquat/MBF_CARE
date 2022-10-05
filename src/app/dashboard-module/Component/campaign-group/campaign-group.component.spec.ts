import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignGroupComponent } from './campaign-group.component';

describe('CampaignGroupComponent', () => {
  let component: CampaignGroupComponent;
  let fixture: ComponentFixture<CampaignGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
