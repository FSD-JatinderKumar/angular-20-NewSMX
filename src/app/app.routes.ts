import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(c => c.Home) },
  {
    path: 'NewApplication', loadChildren: () => import('./registration/registration-form/registration-module').then(m=>m.RegistrationModule),
  },
  
];
