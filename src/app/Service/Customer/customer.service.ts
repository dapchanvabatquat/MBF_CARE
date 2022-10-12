import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CampaignGroup, CampaignStep } from 'src/app/Model/Campaign';
import { lstCustomer } from 'src/app/Model/Customer';
import { CommonserviceService } from '../CommonService/commonservice.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  _urlApi: string = "";
  _Token: any = "";
  constructor(
    private httpService: CommonserviceService) {
    this._urlApi = httpService._urlApi;
  }

  addCustomers() {
    this._Token = localStorage.getItem("Token");
    return this.httpService.addCustomers('/addCustomers', this._Token);
  }

  updateGroup() {
    this._Token = localStorage.getItem("Token");
    return this.httpService.updateGroup('/updateGroup', this._Token);
  }

  addCampaign(Camp: CampaignGroup) {
    this._Token = localStorage.getItem("Token");
    return this.httpService.addCampaign('/addCampaign', this._Token, Camp);
  }

  editCampaign(Camp: CampaignGroup) {
    this._Token = localStorage.getItem("Token");
    return this.httpService.addCampaign('/editCampaign', this._Token, Camp);
  }

  stepCampaign(Camp: CampaignStep) {
    this._Token = localStorage.getItem("Token");
    return this.httpService.addCampaign('/stepCampaign', this._Token, Camp);
  }

  getCustomer(KeyWord: string, PageNumber: number, PageSize: number) {
    this._Token = localStorage.getItem("Token");
    return this.httpService.getCustomer('/getCustomer', this._Token, { KeyWord: KeyWord, PageNumber: PageNumber, PageSize: PageSize })
      .pipe(map((data: lstCustomer) => {
        return data;
      }));
  }

  getCampaign(KeyWord: string, PageNumber: number, PageSize: number) {
    this._Token = localStorage.getItem("Token");
    return this.httpService.getCampaign('/getCampaign', this._Token, { KeyWord: KeyWord, PageNumber: PageNumber, PageSize: PageSize })
      .pipe(map((data: lstCustomer) => {
        return data;
      }));
  }

  getCampaignCustomers(KeyWord: string, CampaignId: number, PageNumber: number, PageSize: number) {
    this._Token = localStorage.getItem("Token");
    return this.httpService.getCampaign('/getCampaignCustomers', this._Token, { KeyWord: KeyWord, CampaignId: CampaignId, PageNumber: PageNumber, PageSize: PageSize })
      .pipe(map((data: lstCustomer) => {
        return data;
      }));
  }

  getCampaignGroup(KeyWord: string, PageNumber: number, PageSize: number) {
    this._Token = localStorage.getItem("Token");
    return this.httpService.getCampaign('/getCampaignGroup', this._Token, { KeyWord: KeyWord, PageNumber: PageNumber, PageSize: PageSize })
      .pipe(map((data: lstCustomer) => {
        return data;
      }));
  }

  getCampaignKpi(KeyWord: string, PageNumber: number, PageSize: number) {
    this._Token = localStorage.getItem("Token");
    return this.httpService.getCampaign('/getCampaignKpi', this._Token, { KeyWord: KeyWord, PageNumber: PageNumber, PageSize: PageSize })
      .pipe(map((data: lstCustomer) => {
        return data;
      }));
  }

  getCampaignbyId(Id: number) {
    this._Token = localStorage.getItem("Token");
    return this.httpService.postRequest('/getCampaignById', this._Token, { Id: Id })
      .pipe(map((data: lstCustomer) => {
        return data;
      }));
  }


  Paging(page: number, searchText: string, numberDis: number) {
    return this.httpService.getRequest('admin/ManageAccount' + '?page=' + page + '&Keyword=' + searchText + '&pageSize=' + numberDis)
      .pipe(map((data: lstCustomer) => {
        return data;
      }))
  }

  
  getCustomerGroup(KeyWord: string, PageNumber: number, PageSize: number)
  {
    this._Token = localStorage.getItem("Token");
    return this.httpService.getCustomer('/getCustomerGroup', this._Token, {KeyWord: KeyWord, PageNumber: PageNumber, PageSize: PageSize})
    .pipe(map((data: lstCustomer) => {
      return data;
    }));
  }

  getCustomerBehavior(KeyWord: string, PageNumber: number, PageSize: number)
  {
    this._Token = localStorage.getItem("Token");
    return this.httpService.getCustomer('/getCustomerBehavior', this._Token, {KeyWord: KeyWord, PageNumber: PageNumber, PageSize: PageSize})
    .pipe(map((data: lstCustomer) => {
      return data;
    }));
  }

  getCustomerSubject(KeyWord: string, PageNumber: number, PageSize: number)
  {
    this._Token = localStorage.getItem("Token");
    return this.httpService.getCustomer('/getCustomerSubject', this._Token, {KeyWord: KeyWord, PageNumber: PageNumber, PageSize: PageSize})
    .pipe(map((data: lstCustomer) => {
      return data;
    }));
  }

  getCustomerByTrend(KeyWord: string, TrendId: number, PageNumber: number, PageSize: number)
  {
    this._Token = localStorage.getItem("Token");
    return this.httpService.getCustomer('/getCustomerByTrend', this._Token, {KeyWord: KeyWord, TrendId: TrendId, PageNumber: PageNumber, PageSize: PageSize})
    .pipe(map((data: lstCustomer) => {
      return data;
    }));
  }
  
}
