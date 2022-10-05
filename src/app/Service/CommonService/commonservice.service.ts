import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  // _urlApi: string = environment.urlApi + '/api/';
  //  _urlApi: string = 'http://localhost:5000/api/';
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

  postRequest(url: string, data: any): Observable<any> {
    return this.http.post(this._urlApi + url, data);
  }

  putRequest(url: string, data: any): Observable<any> {
    return this.http.put(this._urlApi + url, data);
  }

  deleteRequest(url: string): Observable<any> {
    return this.http.delete(this._urlApi + url);
  }

  uploadRequest(url: string, data: any): Observable<any> {
    return this.http.post(this._urlApi + url, data, { reportProgress: true });
  }

  downloadRequest(url: string, id?: number): Observable<any> {
    if (id) {
      return this.http.get(`${this._urlApi + url}/${id}`, { responseType: 'blob' })
    }
    return this.http.get(`${this._urlApi + url}`, { responseType: 'blob' })
  }

  DowloadRequest(url: string): Observable<any> {
    return this.http.get(this._urlApi + url, { reportProgress: true, responseType: 'blob', });
  }

  postRequestMobile(url: string, data: any): Observable<any> {
    return this.http.post(this._urlApi + url, data);
  }
}
