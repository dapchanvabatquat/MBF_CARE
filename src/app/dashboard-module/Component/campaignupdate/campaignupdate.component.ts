import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerService } from 'src/app/Service/Customer/customer.service';
import { Campaign, CampaignGroup, CampaignStep } from 'src/app/Model/Campaign';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';

@Component({
  selector: 'app-campaignupdate',
  templateUrl: './campaignupdate.component.html',
  styleUrls: ['./campaignupdate.component.css']
})
export class CampaignupdateComponent implements OnInit {

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

  objCampaignStep: CampaignStep = {
    CampaignId: 0,
    Step: 0
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
    public dialogRef: MatDialogRef<CampaignupdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toatr: ToastrcustomService) {

    this.Camp.Id = this.data.Id;
    this.getCampaignById();
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
        for (let i = 0; i < this.CampaignKpi.length; i++) {
          if (this.CampaignKpi[i].Code == "K1") {
            this.CampaignKpi[i].Check = this.Camp.K1;
          }
          else if (this.CampaignKpi[i].Code == "K2") {
            this.CampaignKpi[i].Check = this.Camp.K2;
          }
          else if (this.CampaignKpi[i].Code == "K3") {
            this.CampaignKpi[i].Check = this.Camp.K3;
          }
          else if (this.CampaignKpi[i].Code == "K4") {
            this.CampaignKpi[i].Check = this.Camp.K4;
          }
          else if (this.CampaignKpi[i].Code == "K5") {
            this.CampaignKpi[i].Check = this.Camp.K5;
          }
          else if (this.CampaignKpi[i].Code == "K6") {
            this.CampaignKpi[i].Check = this.Camp.K6;
          }
          else if (this.CampaignKpi[i].Code == "K7") {
            this.CampaignKpi[i].Check = this.Camp.K7;
          }
          else if (this.CampaignKpi[i].Code == "K8") {
            this.CampaignKpi[i].Check = this.Camp.K8;
          }
          else if (this.CampaignKpi[i].Code == "K9") {
            this.CampaignKpi[i].Check = this.Camp.K9;
          }
          else if (this.CampaignKpi[i].Code == "K10") {
            this.CampaignKpi[i].Check = this.Camp.K10;
          }
          else if (this.CampaignKpi[i].Code == "K11") {
            this.CampaignKpi[i].Check = this.Camp.K11;
          }
          else {
            this.CampaignKpi[i].Check = false;
          }
        }
      }
    })
  }

  getCampaignById() {
    this.Data = this.customerService.getCampaignbyId(this.Camp.Id);
    this.Data.subscribe((data: any) => {
      if (data) {
        this.Camp.Id = data.Id;
        this.Camp.GroupId = data.GroupId;
        this.Camp.Name = data.Name;
        this.Camp.Description = data.Description;
        this.Camp.DayBegin = data.DayBegin;
        this.Camp.DayEnd = data.DayEnd;
        this.Camp.Act_SMS = data.Act_SMS;
        this.Camp.Act_SMS_Content = data.Act_SMS_Content;
        this.Camp.Act_Zalo = data.Act_Zalo;
        this.Camp.Act_Zalo_Content = data.Act_Zalo_Content;
        this.Camp.Act_FB = data.Act_FB;
        this.Camp.Act_FB_Content = data.Act_FB_Content;
        this.Camp.Act_CallOut = data.Act_CallOut;
        this.Camp.Act_CallOut_Content = data.Act_CallOut_Content;
        this.Camp.Act_AICallcenter = data.Act_AICallcenter;
        this.Camp.Act_AICallcenter_Content = data.Act_AICallcenter_Content;
        this.Camp.K1 = data.K1;
        this.Camp.K2 = data.K2;
        this.Camp.K3 = data.K3;
        this.Camp.K4 = data.K4;
        this.Camp.K5 = data.K5;
        this.Camp.K6 = data.K6;
        this.Camp.K7 = data.K7;
        this.Camp.K8 = data.K8;
        this.Camp.K9 = data.K9;
        this.Camp.K10 = data.K10;
        this.Camp.K11 = data.K11;
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

    this.Data = this.customerService.editCampaign(this.Camp);
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
          this.toatr.showError("Cập nhật chiến dịch thất bại!");
        }
      })
    }

  }

  delCampain() {

    this.objCampaignStep.CampaignId = this.Camp.Id;
    this.objCampaignStep.Step = 3;

    this.Data = this.customerService.stepCampaign(this.objCampaignStep);
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
          this.toatr.showError("Cập nhật chiến dịch thất bại!");
        }
      })
    }

  }

}
