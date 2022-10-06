import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/Model/Table';
import { CustomerService } from 'src/app/Service/Customer/customer.service';
import { Customer } from 'src/app/Model/Customer';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
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

  CustomerSearchData!: Observable<any>;

  CustomerSearch!: Array<{
    Id: number,
    PhoneNumber: string,
    Name: string,
    GroupId: number,
    GroupName: string,
    TrendId: number,
    ZaloId: number,
    FBId: string,
    totalRecord: 0,
    totalPage: 0
  }>;

  CustomerSearchAll: any;

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
    this.getCustomer("", 1, 10, 1);
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

  getCustomer(KeyWord: string, PageNumber: number, PageSize: number, CurrentPage: number) {
    this.Data2 = this.customerService.getCustomer(KeyWord, PageNumber, PageSize);
    this.Data2.subscribe((data: any) => {
      if (data) {
        //Do some things
        this.CustomerSearchData = data;
        this.CustomerSearch = data;
        this.CustomerSearchAll = this.CustomerSearchData;

        for (let i = 0; i < this.CustomerSearch.length; i++) {
          let item = this.CustomerSearch[i];
          this.Pagination.pageSize = (Number(item.totalRecord) / Number(item.totalPage))
          this.Pagination.totalPage = item.totalPage;

        }
        this.Pagination.currentPage = CurrentPage;

        this.Pagination.totalRecord = this.CustomerSearch.length

      }
    })
  }

  onChangePage(pageOfItems: any) {
    pageOfItems.Keyword = this.PageInfo.Keyword;
    this.PageInfo = pageOfItems
    this.Pagingdata(pageOfItems)
  }

  Pagingdata(PageInfo: any) {

    this.Pagination.currentPage = PageInfo.currentPage,
      this.Pagination.pageSize = PageInfo.pageSize,
      this.Pagination.totalPage = PageInfo.totalPage,
      this.Pagination.totalRecord = this.CustomerSearch.length;

    this.getCustomer("", this.Pagination.totalPage, this.Pagination.pageSize, this.Pagination.currentPage)

  }


}
