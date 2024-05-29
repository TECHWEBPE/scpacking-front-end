import { Injectable, inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { IApiResponseOcrd } from './models/iapi-response-ocrd';
import { OcrdsApiService } from './api/ocrds-api.service';

@Injectable({
  providedIn: 'root'
})
export class OcrdService {

  constructor() { }
}

export const OcrdResolverService: ResolveFn<IApiResponseOcrd[]> = (route,state) =>{
  const _ocrdApiService = inject(OcrdsApiService);
  return _ocrdApiService.getAllOcrds();
} 
