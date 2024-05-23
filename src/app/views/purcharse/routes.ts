import { PurcharseOrderListComponent } from './purcharse-order-list/purcharse-order-list.component';


import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Compras'
    },
    children: [
      {
        path: '',
        redirectTo: 'purcharse-order',
        pathMatch: 'full'
      },
      {
        path: 'purcharse-order',
        loadComponent: () => import('./purcharse-order-list/purcharse-order-list.component').then(m => m.PurcharseOrderListComponent),
        data: {
          title: 'Orden Compra'
        }
      },
     
    ]
  }
];
