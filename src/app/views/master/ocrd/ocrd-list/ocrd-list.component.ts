import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { OcrdsApiService } from 'src/app/services/api/ocrds-api.service';
//import {OcrdResolverService} from 'src/app/services/ocrd.service' 
import { IApiResponseOcrd } from 'src/app/services/models/iapi-response-ocrd';
import { CommonModule } from '@angular/common';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective, ButtonDirective } from '@coreui/angular';

@Component({
  selector: 'app-ocrd-list',
  standalone: true,
  imports: [
    CommonModule,
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    TableDirective,
    TableColorDirective,
    TableActiveDirective,
    BorderDirective,
    AlignDirective,ButtonDirective,
  ],
  templateUrl: './ocrd-list.component.html',
  styleUrl: './ocrd-list.component.scss',
})
export class OcrdListComponent implements OnInit {
  private readonly _ocrdApiService = inject(OcrdsApiService);
  ocrd: IApiResponseOcrd[] = [];
  ocrd$!: Observable<IApiResponseOcrd[]>;

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    // this._ocrdApiService.getAllOcrds().subscribe(ocrdtmp => this.ocrd$ = ocrdtmp );
  //  this.ocrd$ = this._ocrdApiService.getAllOcrds();
   this.getOcrd();
  }

  getOcrd():void{
    this.ocrd$ = this._ocrdApiService.getAllOcrds();
    //this._ocrdApiService.getAllOcrds().subscribe(ocrd  => this.ocrd$ = ocrd );
  }

  count = 0;
}
