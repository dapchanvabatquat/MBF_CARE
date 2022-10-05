import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable()
export class AdminService {
  constructor(
    private http: HttpClient,
    private configService: ConfigService
  )
  {
  }


  public hasPermission(url: string): boolean {
    let currentUrl = url.toLowerCase();
    let currentUrlIndex = (currentUrl + '/index').replace('//', '/');
    let extenalUrlApi = this.getExtenalUrlApi(currentUrl);
    let extenalUrlIndex = this.getExtenalUrlIndex(currentUrl);
    return currentUrl === '/';
  }

  getExtenalUrlIndex(currentUrl: string): string {
    let extenalUrl =
      currentUrl === '/' || currentUrl === '/home'
        ? this.configService.url.home.index
        : `/api${currentUrl}/index`;
    return extenalUrl.replace('//', '/').replace('-', '').toLowerCase();
  }

  getExtenalUrlApi(currentUrl: string): string {
    let extenalUrl =
      currentUrl === '/' || currentUrl === '/home'
        ? this.configService.url.home.index
        : `/api${currentUrl}`;
    return extenalUrl.replace('//', '/').replace('-', '').toLowerCase();
  }
}
