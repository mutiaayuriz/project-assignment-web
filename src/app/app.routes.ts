import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./list/list.component').then((mod) => mod.ListComponent),
  },
  {
    path: 'detail',
    loadComponent: () =>
      import('./detail/detail.component').then((mod) => mod.DetailComponent),
  },
];
