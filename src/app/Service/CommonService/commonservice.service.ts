import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  // _urlApi: string = environment.urlApi + '/api/';
  //  _urlApi: string = '45.124.94.191:8090/api/';
  // public _urlApi: string = 'http://45.124.94.191:8090/api/';
  public _urlApi: string = 'http://localhost:1195/api/';
  public static Token: string = "";

  constructor(
    private http: HttpClient) {

  }

  getRequest(url: string, param?: any): Observable<any> {
    if (param) {
      return this.http.get(this._urlApi + url + "/" + param);
    }
    else {
      return this.http.get(this._urlApi + url);
    }
  }

  getToken(UserName: string, PassWord: string): Observable<any> {
    // return this.http.post(this._urlApi.replace("/api","") + url,data);
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.set('grant_type', 'password');
    urlSearchParams.set('username', UserName);
    urlSearchParams.set('password', PassWord);

    let body = urlSearchParams.toString();

    return this.http.post(this._urlApi.replace("/api", "") + "token", body)
      .pipe(map(res => res));

  }

  signIn(url: string, Token: string, data: any): Observable<any> {
    console.log("45", Token)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Token,
    });
    return this.http.post<any>(this._urlApi + url, data, {
      headers: headers,
    });

  }

  addCustomers(url: string, Token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Token,
    });
    return this.http.post<any>(this._urlApi + url, {
      headers: headers,
    });
  }

  getCustomer(url: string, Token: string, data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Token,
    });
    return this.http.post<any>(this._urlApi + url, data, {
      headers: headers,
    });
  }


  updateGroup(url: string, Token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Token,
    });
    return this.http.post<any>(this._urlApi + url, {
      headers: headers,
    });
  }

  addCampaign(url: string, Token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Token,
    });
    return this.http.post<any>(this._urlApi + url, {
      headers: headers,
    });
  }


}
