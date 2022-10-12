import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerService } from 'src/app/Service/Customer/customer.service';
import { Campaign, CampaignGroup } from 'src/app/Model/Campaign';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';

@Component({
  selector: 'app-campaignadd',
  templateUrl: './campaignadd.component.html',
  styleUrls: ['./campaignadd.component.css']
})


export class CampaignaddComponent implements OnInit {

  Camp: Campaign = {
    Id: 0,
    GroupId: 0,
    Name: '',
    Description: '',
    DayBegin: new Date().toDateString(),
    DayEnd: new Date().toDateString(),
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

  constructor(
    private customerService: CustomerService,
    public dialogRef: MatDialogRef<CampaignaddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toatr: ToastrcustomService) {

    this.Camp.Id = this.data.Id;
    this.getCampaignGroup();
    this.getCampaignKpi();

  }

  ngOnInit(): void {
    // console.log(this.data);
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
      }
    })
  }

  SaveData() {

    if (this.Camp.GroupId == 0) {
      this.toatr.showError("Bạn chưa xác định nhóm chiến dịch!")
      return;
    }

    if (this.Camp.Name == "") {
      this.toatr.showError("Bạn chưa nhập tên chiến dịch chiến dịch!")
      return;
    }

    if (this.Camp.DayBegin == "" || this.Camp.DayEnd == "") {
      this.toatr.showError("Bạn chưa xác định khoảng thời gian chạy chiến dịch!")
      return;
    }

    if (!this.Camp.Act_SMS && !this.Camp.Act_SMS && !this.Camp.Act_FB && !this.Camp.Act_CallOut && !this.Camp.Act_AICallcenter) {
      this.toatr.showError("Bạn chưa xác định kênh truyền thông!")
      return;
    }

    for (let i = 0; i < this.CampaignKpi.length; i++) {
      if (this.CampaignKpi[i].Code == "K1") {
        this.Camp.K1 = this.CampaignKpi[i].Check;
      }
      else if (this.CampaignKpi[i].Code == "K2") {
        this.Camp.K2 = this.CampaignKpi[i].Check;
      }
      else if (this.CampaignKpi[i].Code == "K3") {
        this.Camp.K3 = this.CampaignKpi[i].Check;
      }
      else if (this.CampaignKpi[i].Code == "K4") {
        this.Camp.K4 = this.CampaignKpi[i].Check;
      }
      else if (this.CampaignKpi[i].Code == "K5") {
        this.Camp.K5 = this.CampaignKpi[i].Check;
      }
      else if (this.CampaignKpi[i].Code == "K6") {
        this.Camp.K6 = this.CampaignKpi[i].Check;
      }
      else if (this.CampaignKpi[i].Code == "K7") {
        this.Camp.K7 = this.CampaignKpi[i].Check;
      }
      else if (this.CampaignKpi[i].Code == "K8") {
        this.Camp.K8 = this.CampaignKpi[i].Check;
      }
      else if (this.CampaignKpi[i].Code == "K9") {
        this.Camp.K9 = this.CampaignKpi[i].Check;
      }
      else if (this.CampaignKpi[i].Code == "K10") {
        this.Camp.K10 = this.CampaignKpi[i].Check;
      }
      else if (this.CampaignKpi[i].Code == "K11") {
        this.Camp.K11 = this.CampaignKpi[i].Check;
      }
      else {
        this.CampaignKpi[i].Check = false;
      }
    }

    if (!this.Camp.K1 && !this.Camp.K2 && !this.Camp.K3 && !this.Camp.K4 &&
      !this.Camp.K5 && !this.Camp.K6 && !this.Camp.K7 && !this.Camp.K8 && !this.Camp.K9 && !this.Camp.K10 && !this.Camp.K11) {
      this.toatr.showError("Bạn chưa xác định KPI đánh giá chiến dịch!")
      return;
    }

    this.Data = this.customerService.addCampaign(this.Camp);
    if (this.Data) {
      this.Data.subscribe((data: any) => {
        if (data.State == "OK") {

          let data = {
            statusCode: 200,
            message: 'Cập nhật thông tin thành công!'
          }

          this.dialogRef.close(data);

        }
        else {
          this.toatr.showError("Tạo chiến dịch thất bại!");
        }
      })
    }

  }

}
