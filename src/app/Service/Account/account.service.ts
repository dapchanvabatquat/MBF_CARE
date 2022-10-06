import { Injectable } from '@angular/core';
import { CommonserviceService } from '../CommonService/commonservice.service';
import { OrgInfo, UserLogin } from '../../Model/User'
import { map } from 'rxjs';
import { Item } from '../../Model/multidropdown'
import { Account, lstAccount, AccountEdit, AccountCreate } from 'src/app/Model/Account';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  _urlApi: string = "";

  constructor(
    private httpService: CommonserviceService) {
    this._urlApi = httpService._urlApi;
  }

  getToken(Org: OrgInfo) {
    if (Org.username) {
      return this.httpService.getToken(Org.username, Org.password);
    }
    else {
      return null;
    }

  }

  Login(User: UserLogin, Token: string) {
    return this.httpService.signIn('/Login', Token, { CODEORG: User.MaDonVi, TaiKhoan: User.TaiKhoan, MatKhau: User.MatKhau, HoVaTen: User.HoVaTen })
  }




  logOut() {
    localStorage.removeItem('UserInfo');
  }

  getListSelectMulti() {
    return this.httpService.getRequest('admin/ManageAccount')
      .pipe(map((data: any) => {
        return data.map((i: any) => ({
          id: i.id,
          name: i.fullName
        } as Item)) as Item[];
      }))
  }

}
