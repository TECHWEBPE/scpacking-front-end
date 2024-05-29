import { IApiResponseOcrd } from './../models/iapi-response-ocrd';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OcrdsApiService {
  private readonly URL_API_OCRD = `${environment.apidomain}/ocrd`;
  private readonly _httpClient = inject(HttpClient);
  constructor() {}
  
  getAllOcrds(): Observable<IApiResponseOcrd[]> {
    return  this._httpClient.get<IApiResponseOcrd[]>(this.URL_API_OCRD);
  }
  
}