import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { Campaign, CampaignCustomers } from 'src/app/Model/Campaign';
import { Pagination } from 'src/app/Model/Table';
import { CustomerService } from 'src/app/Service/Customer/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CampaignCustomerDetailComponent } from '../campaign-customer-detail/campaign-customer-detail.component';

@Component({
  selector: 'app-campaign-customer',
  templateUrl: './campaign-customer.component.html',
  styleUrls: ['./campaign-customer.component.css']
})
export class CampaignCustomerComponent implements OnInit {

  Data: any;
  Data1: any;
  Data2: any;

  CampaignId: number = 0;

  currentPage: any;
  pageSize: any;
  totalPage: any;
  totalRecord: any;

  loadding: boolean = false;

  CampInfo: Campaign = {
    Id: 0,
    GroupId: 0,
    Name: '',
    Description: '',
    DayBegin: '',
    DayEnd: '',
    Act_SMS: false,
    Act_SMS_Content: '',
    Act_Zalo: false,
    Act_Zalo_Content: '',
    Act_FB: false,
    Act_FB_Content: '',
    Act_CallOut: false,
    Act_CallOut_Content: '',
    Act_AICallcenter: false,
    Act_AICallcenter_Content: '',
    K1: false,
    K2: false,
    K3: false,
    K4: false,
    K5: false,
    K6: false,
    K7: false,
    K8: false,
    K9: false,
    K10: false,
    K11: false,
    KeyWord: '',
    PageNumber: 1,
    PageSize: 10
  }

  Camp: CampaignCustomers = {
    CampaignId: 0,
    CustomerId: 0,
    Name: "",
    PhoneNumber: "",
    K1: false,
    K1Value: "",
    K2: false,
    K2Value: "",
    K3: false,
    K3Value: "",
    K4: false,
    K4Value: "",
    K5: false,
    K5Value: "",
    K6: false,
    K6Value: "",
    K7: false,
    K7Value: "",
    K8: false,
    K8Value: "",
    K9: false,
    K9Value: "",
    K10: false,
    K10Value: "",
    K11: false,
    K11Value: "",
    LastPush: "",
    LastPull: "",
    totalRecord: 0,
    totalPage: 0,
    PageNumber: 1,
    PageSize: 10
  }

  CampaignSearchData!: Observable<any>;

  CampaignSearch!: Array<{
    CampaignId: number,
    CustomerId: number,
    Name: string,
    PhoneNumber: string,
    K1: boolean,
    K1Value: string,
    K2: boolean,
    K2Value: string,
    K3: boolean,
    K3Value: string,
    K4: boolean,
    K4Value: string,
    K5: boolean,
    K5Value: string,
    K6: boolean,
    K6Value: string,
    K7: boolean,
    K7Value: string,
    K8: boolean,
    K8Value: string,
    K9: boolean,
    K9Value: string,
    K10: boolean,
    K10Value: string,
    K11: boolean,
    K11Value: string,
    LastPush: string,
    LastPull: string,
    totalRecord: number,
    totalPage: number,
    PageNumber: number,
    PageSize: number
  }>;

  CampaignSearchAll: any;

  Pagination: Pagination = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
  }

  PageInfo = {
    page: 1,
    Keyword: '',
    pageSize: 10,
    totalPage: 10
  }

  constructor(
    private customerService: CustomerService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrcustomService) {
    this.getCampaignById();
    this.getCampaign("", 1, 10);
  }

  ngOnInit(): void {

  }

  getCampaign(KeyWord: string, PageNumber: number, PageSize: number) {

    this.CampaignId = Number(this.route.snapshot.paramMap.get('id'));

    this.Data2 = this.customerService.getCampaignCustomers(KeyWord, this.CampaignId, PageNumber, PageSize);
    this.Data2.subscribe((data: any) => {
      if (data) {
        this.CampaignSearchData = data;
        this.CampaignSearch = data;
        this.CampaignSearchAll = this.CampaignSearchData;
        for (let i = 0; i < this.CampaignSearch.length; i++) {

          if (PageNumber == 1 && i == 0) {

            this.PageInfo.page = 1;
            this.PageInfo.pageSize = 10;

          }
          let item = this.CampaignSearch[i];

          this.Pagination.pageSize = PageSize;
          this.Pagination.totalPage = item.totalPage;
          this.Pagination.totalRecord = item.totalRecord;

        }

      }
    })
  }

  getCampaignById() {
    this.CampaignId = Number(this.route.snapshot.paramMap.get('id'));
    this.Data = this.customerService.getCampaignbyId(this.CampaignId);
    this.Data.subscribe((data: any) => {
      if (data) {
        this.CampInfo.Name = data.Name;
      }
    })
  }

  openDetail(CampaignId: number, CustomerId:number,CustomerName:string,PhoneNumber:string) {
    const dialogRef = this.dialog.open(CampaignCustomerDetailComponent, {
      width: '1000px', data: {
        CampaignId: CampaignId,
        CampaignName:this.CampInfo.Name,
        CustomerId: CustomerId,
        CustomerName:CustomerName,
        PhoneNumber:PhoneNumber
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
          this.getCampaign("", 1, 10);
          this.Pagingdata(this.PageInfo);
        } else {
          this.toastr.showError(result.message);
        }
      }
    });
  }

  onChangePage(pageOfItems: any) {
    pageOfItems.Keyword = this.PageInfo.Keyword;
    this.PageInfo = pageOfItems
    this.Pagingdata(pageOfItems)
  }

  Pagingdata(PageInfo: any) {
    this.getCampaign("", PageInfo.page, PageInfo.pageSize)
  }

  goToCampaingCustomerPage(Id: any) {
    this.router.navigateByUrl('Home/chiendich-khachhang/' + Id);
  }

}
