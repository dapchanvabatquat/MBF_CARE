import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { Campaign } from 'src/app/Model/Campaign';
import { Pagination } from 'src/app/Model/Table';
import { CustomerService } from 'src/app/Service/Customer/customer.service';
import { CampaignaddComponent } from 'src/app/dashboard-module/Component/campaignadd/campaignadd.component';
import { CampaignupdateComponent } from 'src/app/dashboard-module/Component/campaignupdate/campaignupdate.component';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  Data: any;
  Data1: any;
  Data2: any;

  currentPage: any;
  pageSize: any;
  totalPage: any;
  totalRecord: any;



  loadding: boolean = false;

  Camp: Campaign = {
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

  CampaignSearchData!: Observable<any>;

  CampaignSearch!: Array<{
    Id: number,
    GroupId: number,
    Name: string,
    Description: string,
    DayBegin: string,
    DayEnd: string,
    Act_SMS: boolean,
    Act_Zalo: boolean,
    Act_FB: boolean,
    Act_CallOut: boolean,
    Act_AICallcenter: boolean,
    K1: boolean,
    K2: boolean,
    K3: boolean,
    K4: boolean,
    K5: boolean,
    K6: boolean,
    K7: boolean,
    K8: boolean,
    K9: boolean,
    K10: boolean,
    K11: boolean,
    Step: number,
    totalPage: number,
    totalRecord: number
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
    private toastr: ToastrcustomService
  ) {
    this.getCampaign("", 1, 10);
  }

  ngOnInit(): void {

  }

  updateCustomers() {
    this.Data = this.customerService.addCustomers();
    this.Data.subscribe((data: any) => {
      if (data.State == "OK") {
        //Do some things
      }
    })
  }

  updateCustomerGroup() {
    this.Data1 = this.customerService.updateGroup();
    this.Data1.subscribe((data: any) => {
      if (data.State == "OK") {
        //Do some things
      }
    })
  }

  getCampaign(KeyWord: string, PageNumber: number, PageSize: number) {
    this.Data2 = this.customerService.getCampaign(KeyWord, PageNumber, PageSize);
    this.Data2.subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.CampaignSearchData = data;
        this.CampaignSearch = data;
        this.CampaignSearchAll = this.CampaignSearchData;
        for (let i = 0; i < this.CampaignSearch.length; i++) {

          if (PageNumber == 1 && i == 0) {

            this.PageInfo.page = 1;
            this.PageInfo.pageSize = 10;

          }
          let item = this.CampaignSearch[i];

          let year = item.DayBegin.substring(0, 4)
          let month = item.DayBegin.substring(5, 7);
          let day = item.DayBegin.substring(8, 10);

          let year1 = item.DayEnd.substring(0, 4)
          let month1 = item.DayEnd.substring(5, 7);
          let day1 = item.DayEnd.substring(8, 10);

          item.DayBegin = day + "/" + month + "/" + year;
          item.DayEnd = day1 + "/" + month1 + "/" + year1;

          this.Pagination.pageSize = PageSize;
          this.Pagination.totalPage = item.totalPage;
          this.Pagination.totalRecord = item.totalRecord;

        }


      }
    })
  }

  openCreate() {
    const dialogRef = this.dialog.open(CampaignaddComponent, { width: '1200px', height: '750px' });
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

  openUpdate(Id: any) {

//     for(let i = 0; i < this.CampaignSearch.length; i++)
//     {
//       let item = this.CampaignSearch[i];
//       if(item.GroupId == selectedValueGroupId)
//       {

//       }
//     }

// this.Camp.Id = this.selectedValueGroupId;
// this.Camp.Name = this.Description;
// this.Camp.DayBegin = this.DayBegin;
// this.Camp.DayEnd = this.DayEnd;
// this.Camp.Act_SMS = this.Act_SMS;
// this.Camp.Act_SMS_Content = this.Act_SMS_Content;
// this.Camp.Act_Zalo = this.Act_Zalo;
// this.Camp.Act_Zalo_Content = this.Act_Zalo_Content;
// this.Camp.Act_FB = this.Act_FB;
// this.Camp.Act_FB_Content = this.Act_FB_Content;
// this.Camp.Act_CallOut = this.Act_CallOut
// this.Camp.Act_CallOut_Content = this.Act_CallOut_Content;
// this.Camp.Act_AICallcenter = this.Act_AICallcenter;
// this.Camp.Act_AICallcenter_Content = this.Act_AICallcenter_Content;


    const dialogRef = this.dialog.open(CampaignupdateComponent, { width: '1200px', height: '750px' });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
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



}
