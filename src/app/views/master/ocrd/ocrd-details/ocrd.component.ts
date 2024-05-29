import { Component } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import {
  ButtonCloseDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective,
  PopoverDirective,
  RowComponent,
  TextColorDirective,
  ThemeDirective,
  TooltipDirective
} from '@coreui/angular';


@Component({
  selector: 'app-ocrd',
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent,  ModalComponent, ModalHeaderComponent, ModalTitleDirective, ThemeDirective, ButtonCloseDirective, ModalBodyComponent, ModalFooterComponent, ButtonDirective, NgTemplateOutlet, ModalToggleDirective, PopoverDirective, TooltipDirective],
  templateUrl: './ocrd.component.html',
  styleUrl: './ocrd.component.scss',
})
export class OcrdComponent {}
