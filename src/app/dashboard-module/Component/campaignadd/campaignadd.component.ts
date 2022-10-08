import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AccountService } from 'src/app/Service/Account/account.service';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/Service/Customer/customer.service';
import { Campaign, CampaignGroup } from 'src/app/Model/Campaign';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
@Component({
  selector: 'app-campaignadd',
  templateUrl: './campaignadd.component.html',
  styleUrls: ['./campaignadd.component.css']
})





export class CampaignaddComponent implements OnInit {

  selectedValueGroupId: any;
  CampName: string = '';
  date: Date = new Date();
  year: string = Date.now.toString().substring(0, 4)
  month: string = Date.now.toString().substring(5, 7);
  day: string = Date.now.toString().substring(8, 10);


  GroupId: number = 0;
  Name: string = '';
  Description: string = '';
  DayBegin: string = this.day + "/" + this.month + "/" + this.year;
  DayEnd: string = this.day + "/" + this.month + "/" + this.year;
  Act_SMS: boolean = false;
  Act_SMS_Content: string = '';
  Act_Zalo: boolean = false;
  Act_Zalo_Content: string = '';
  Act_FB: boolean = false;
  Act_FB_Content: string = '';
  Act_CallOut: boolean = false;
  Act_CallOut_Content: string = '';
  Act_AICallcenter: boolean = false;
  Act_AICallcenter_Content: string = '';



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

  Data: any;

  CreateEditForm!: FormGroup
  submited: boolean = false;
  listProductGroup: any = [];
  listUnit: any = [];
  lockOrOpen: boolean = false;

  CampGroup: CampaignGroup = {
    Id: 0,
    Name: ''
  }


  CampaignGroup!: Array<{ Id: number, Name: string }>;
  CampaignKpi!: Array<{ Id: number, Check: boolean, Code: string; Name: string }>;



  @Input() customerId: number = 0;
  @Input() isCreate: boolean = true;
  constructor(
    private customerService: CustomerService,
    public dialogRef: MatDialogRef<CampaignaddComponent>,
    private toatr: ToastrcustomService
  ) {



    this.getCampaignGroup();
    this.getCampaignKpi();

  }

  ngOnInit(): void {
    //Add new

  }

  getCampaignGroup() {
    this.Data = this.customerService.getCampaignGroup("", 1, 100);
    this.Data.subscribe((data: any) => {
      if (data) {
        this.CampaignGroup = data;

      }
    })
  }

  getCampaignKpi() {
    this.Data = this.customerService.getCampaignKpi("", 1, 100);
    this.Data.subscribe((data: any) => {
      if (data) {
        this.CampaignKpi = data;
        for(let i = 0; i<this.CampaignKpi.length; i++)
        {
          let item = this.CampaignKpi[i];
          item.Check = false;
        }
        console.log("133", this.CampaignKpi)


      }
    })
  }





  SaveData() {
    if (!this.selectedValueGroupId) {
      this.toatr.showError("Bạn chưa chọn NHÓM CHIẾN DỊCH !")
      return;
    }
    this.Camp.GroupId = this.selectedValueGroupId;
    this.Camp.Name = this.Name;
    this.Camp.DayBegin = this.DayBegin;
    this.Camp.DayEnd = this.DayEnd;
    this.Camp.Act_SMS = this.Act_SMS;
    this.Camp.Act_SMS_Content = this.Act_SMS_Content;
    this.Camp.Act_Zalo = this.Act_Zalo;
    this.Camp.Act_Zalo_Content = this.Act_Zalo_Content;
    this.Camp.Act_FB = this.Act_FB;
    this.Camp.Act_FB_Content = this.Act_FB_Content;
    this.Camp.Act_CallOut = this.Act_CallOut
    this.Camp.Act_CallOut_Content = this.Act_CallOut_Content;
    this.Camp.Act_AICallcenter = this.Act_AICallcenter;
    this.Camp.Act_AICallcenter_Content = this.Act_AICallcenter_Content;


    this.Data = this.customerService.addCampaign(this.Camp);
    if (this.Data) {
      this.Data.subscribe((data: any) => {
        if (data.State == "OK") {
          this.toatr.showSuccess("Cập nhật thông tin thành công !");
        }

      })
    }

  }

}
