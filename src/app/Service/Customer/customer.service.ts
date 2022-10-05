import { Injectable } from '@angular/core';
import { CommonserviceService } from '../CommonService/commonservice.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  _urlApi: string = "";

  constructor(
    private httpService: CommonserviceService) {
    this._urlApi = httpService._urlApi;
  }
}
