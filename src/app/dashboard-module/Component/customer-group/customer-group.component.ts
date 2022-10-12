import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/Model/Customer';
import { Pagination } from 'src/app/Model/Table';
import { CustomerService } from 'src/app/Service/Customer/customer.service';

@Component({
  selector: 'app-customer-group',
  templateUrl: './customer-group.component.html',
  styleUrls: ['./customer-group.component.css']
})
export class CustomerGroupComponent implements OnInit {

  Data: any;
  Data1: any;
  Data2: any;

  currentPage: any;
  pageSize: any;
  totalPage: any;
  totalRecord: any;



  loadding: boolean = false;

  Cus: Customer = {
    Id: 0,
    PhoneNumber: '',
    Name: '',
    GroupId: 0,
    GroupName: '',
    TrendId: 0,
    ZaloId: '',
    FBId: '',
    totalRecord: 0,
    totalPage: 0
  }

  CustomerGroupSearchData!: Observable<any>;

  CustomerGroupSearch!: Array<{
    Id: number,
    ARPU1: number,
    ARPU2: number,
    Code: string,
    Description: string,
    Name: string,
    totalRecord: 0,
    totalPage: 0
  }>;

  CustomerGroupSearchAll: any;

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
    private customerService: CustomerService
  ) {
    this.getCustomerGroup("", 1, 10);
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

  getCustomerGroup(KeyWord: string, PageNumber: number, PageSize: number) {
    this.Data2 = this.customerService.getCustomerGroup(KeyWord, PageNumber, PageSize);
    this.Data2.subscribe((data: any) => {
      if (data) {
        //Do some things
        console.log(data);
        this.CustomerGroupSearchData = data;
        this.CustomerGroupSearch = data;
        this.CustomerGroupSearchAll = this.CustomerGroupSearchData;

        for (let i = 0; i < this.CustomerGroupSearch.length; i++) {

          if (PageNumber == 1 && i == 0) {

            this.PageInfo.page = 1;
            this.PageInfo.pageSize = 10;

          }
          let item = this.CustomerGroupSearch[i];
          this.Pagination.pageSize = PageSize;
          this.Pagination.totalPage = item.totalPage;
          this.Pagination.totalRecord = item.totalRecord;

        }


      }
    })
  }

  onChangePage(pageOfItems: any) {

    pageOfItems.Keyword = this.PageInfo.Keyword;
    this.PageInfo = pageOfItems
    console.log("131", this.PageInfo);
    this.Pagingdata(pageOfItems)
  }

  Pagingdata(PageInfo: any) {

    this.getCustomerGroup("", PageInfo.page, PageInfo.pageSize)

  }


}
