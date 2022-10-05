import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Service/Customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  Data: any;
  Data1: any;
  Data2: any;

  constructor(
    private customerService: CustomerService
  ) {
    this.getCustomer("", 1, 15);
  }

  ngOnInit(): void {
  }

  updateCustomers() {
    this.Data = this.customerService.addCustomers();
    this.Data.subscribe((data: any) => {
      console.log(data.State);
      if (data.State == "OK") {
        //Do some things
      }
    })
  }

  updateCustomerGroup() {
    this.Data1 = this.customerService.updateGroup();
    this.Data1.subscribe((data: any) => {
      console.log(data.State);
      if (data.State == "OK") {
        //Do some things
      }
    })
  }

  getCustomer(KeyWord: string, PageNumber: number, PageSize: number)
  {
    this.Data2 = this.customerService.getCustomer(KeyWord, PageNumber, PageSize);
    this.Data2.subscribe((data: any) => {
      console.log(data);
      if (data) {
        //Do some things
      }
    })
  }




}
