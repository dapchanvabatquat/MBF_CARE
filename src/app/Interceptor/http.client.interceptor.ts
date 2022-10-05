import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import {AccountService } from '../Service/Account/account.service'


@Injectable()


export class HttpClientInterceptor implements HttpInterceptor {

    constructor(private accountService: AccountService,private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request.headers.has('Content-Type') && request.url.search('Upload') < 0 && request.url.search('Import') < 0) {
            request = request.clone({
              headers: request.headers.set('Content-Type', 'application/json')
            });
        }
        return next.handle(request).pipe(
          catchError((error) => {
            const isUnauthorizedError = error.status === 401;
            const isUnknownError = error.statusText === 'Unknown Error' || error.status === 0 || error.status === 500 || error.status === 504;
            return throwError(error);
          })
        );
      }

}
