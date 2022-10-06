import { Injectable } from '@angular/core';
import { map } from 'rxjs';
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

  addCustomers()
  {
    this._Token = localStorage.getItem("Token");
    return this.httpService.addCustomers('/addCustomers', this._Token);
  }

  updateGroup()
  {
    this._Token = localStorage.getItem("Token");
    return this.httpService.updateGroup('/updateGroup', this._Token);
  }

  addCampaign()
  {
    this._Token = localStorage.getItem("Token");
    return this.httpService.updateGroup('/addCampaign', this._Token);
  }

  getCustomer(KeyWord: string, PageNumber: number, PageSize: number)
  {
    this._Token = localStorage.getItem("Token");
    return this.httpService.getCustomer('/getCustomer', this._Token, {KeyWord: KeyWord, PageNumber: PageNumber, PageSize: PageSize})
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

}
