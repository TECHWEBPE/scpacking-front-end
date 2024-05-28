import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OcrdsApiService {
  
  private readonly URL_API_OCRD = `${environment.apidomain}/ocrd`;
  constructor() {
    
  }
  private readonly _http= inject(HttpClient);
  getAllOcrds(): Observable<any> {
    return this._http.get(this.URL_API_OCRD);
  }

  
}





