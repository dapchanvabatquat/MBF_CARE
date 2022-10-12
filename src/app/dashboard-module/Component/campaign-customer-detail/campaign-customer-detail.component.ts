import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { CustomerService } from 'src/app/Service/Customer/customer.service';

@Component({
  selector: 'app-campaign-customer-detail',
  templateUrl: './campaign-customer-detail.component.html',
  styleUrls: ['./campaign-customer-detail.component.css']
})
export class CampaignCustomerDetailComponent implements OnInit {

  modalTitle: string = "-/-";

  constructor(
    private customerService: CustomerService,
    public dialogRef: MatDialogRef<CampaignCustomerDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toatr: ToastrcustomService) {

      this.modalTitle = this.data.CustomerName+' / '+this.data.PhoneNumber+' / '+this.data.CampaignName;

  }

  ngOnInit(): void {
  }

}
