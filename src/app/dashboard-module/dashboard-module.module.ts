import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';

//Component
import { HomeComponent } from './Component/home/home.component';
import { PaginationComponent } from '../View/pagination/pagination.component';
import { SidebarComponent } from './Component/sidebar/sidebar/sidebar.component';
import { MultidropdownComponent } from '../View/multidropdown/multidropdown.component';
import { LoadingComponent } from '../View/loading/loading.component'
//Thư viện

import { MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';
import { MatTreeModule} from '@angular/material/tree';
import { MatDialogModule} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

import {MatMenuModule} from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs'
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NotfoundComponent } from './Component/notfound/notfound.component';

import { CustomerComponent } from './component/customer/customer.component';
import { CustomerGroupComponent } from './component/customer-group/customer-group.component';
import { CustomerBehaviorComponent } from './component/customer-behavior/customer-behavior.component';
import { CustomerSubjectComponent } from './component/customer-subject/customer-subject.component';
import { CampaignGroupComponent } from './component/campaign-group/campaign-group.component';
import { KPIIndexComponent } from './component/kpi-index/kpi-index.component';
import { TrendComponent } from './component/trend/trend.component';
import { CampaignComponent } from './component/campaign/campaign.component';
import { CampaignaddComponent } from 'src/app/dashboard-module/Component/campaignadd/campaignadd.component';


@NgModule({
  declarations: [
    HomeComponent,

    //view
    PaginationComponent,

    MultidropdownComponent,
    SidebarComponent,
    LoadingComponent,
  
    MultidropdownComponent,
    SidebarComponent,
    NotfoundComponent,
    CustomerComponent,
    CustomerGroupComponent,
    CustomerBehaviorComponent,
    CustomerSubjectComponent,
    CampaignGroupComponent,
    KPIIndexComponent,
    TrendComponent,
    CampaignComponent,
    CampaignaddComponent,
  ],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatTreeModule,
    MatMenuModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    //
    FormsModule,
    ReactiveFormsModule,
    //
    // ToastrModule.forRoot()
  ],
})
export class DashboardModuleModule { }
