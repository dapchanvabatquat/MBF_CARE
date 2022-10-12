
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';

import { NotfoundComponent } from './Component/notfound/notfound.component';
import { CustomerComponent } from './component/customer/customer.component';
import { CustomerGroupComponent } from './component/customer-group/customer-group.component';
import { CustomerBehaviorComponent } from './component/customer-behavior/customer-behavior.component';
import { CustomerSubjectComponent } from './component/customer-subject/customer-subject.component';
import { CampaignGroupComponent } from './component/campaign-group/campaign-group.component';
import { KPIIndexComponent } from './component/kpi-index/kpi-index.component';
import { TrendComponent } from './component/trend/trend.component';
import { CampaignComponent } from './component/campaign/campaign.component';
import { CampaignCustomerComponent } from './component/campaign-customer/campaign-customer.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'khachhang',
        component: CustomerComponent,
      },
      {
        path: 'nhomkhachhang',
        component: CustomerGroupComponent,
      },
      {
        path: 'chandungkhachhang',
        component: CustomerSubjectComponent
      },
      {
        path: 'hanhvikhachhang',
        component: CustomerBehaviorComponent
      },
      {
        path: 'nhomchiendich',
        component: CampaignGroupComponent
      },
      {
        path: 'chisokpi',
        component: KPIIndexComponent
      },
      {
        path: 'xuhuong',
        component: TrendComponent
      },
      {
        path: 'chiendich',
        component: CampaignComponent
      },
      {
        path: 'chiendich-khachhang/:id',
        component: CampaignCustomerComponent
      },
      { path: '404-not-found', component: NotfoundComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModuleRoutingModule { }
