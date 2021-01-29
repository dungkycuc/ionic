import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Globals } from '../common/globals';
import { throwError, Observable } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Consts } from './const';
@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(
    @Inject(HttpClient) private httpClient: HttpClient,
    @Inject(Globals) private globals: Globals
  ) {

  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error();
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  Get(url: string): Observable<any> {
    const url_request = Consts.API_URL_LOCAL + url;
    const headers = this.globals.getHeadersWithAuth();
    return this.httpClient.get(url_request, { headers: headers });
  }
  Post(url, body): Observable<any> {
    const url_request = Consts.API_URL_LOCAL + url;
    const headers = this.globals.getHeadersWithAuth();
    return this.httpClient.post(url_request, body, { headers: headers });
  }
  PostAuth(path, data): Observable<any> {
    const headers = this.globals.getHeadersWithoutAuth();
    return this.httpClient.post(Consts.API_URL_LOCAL + path, data, {headers: headers});
  }
}
