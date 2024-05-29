import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Master',
    },
    children: [
      {
        path: '',
        redirectTo: 'ocrd-list',
        pathMatch: 'full',
      },
      {
        path: 'ocrd-list',
        loadComponent: () =>
          import('./ocrd/ocrd-list/ocrd-list.component').then(
            (m) => m.OcrdListComponent
          ),
        data: {
          title: 'Socio Negocio',
        },
      },
      {
        path: 'ocrd-details',
        loadComponent: () =>
          import('./ocrd/ocrd-details/ocrd.component').then(
            (m) => m.OcrdComponent
          ),

        data: {
          title: 'Socio Negocio Detalles',
        },
      },
    ],
  },
];
