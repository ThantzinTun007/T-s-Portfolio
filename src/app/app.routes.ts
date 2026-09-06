import { Routes } from '@angular/router';
import { Layout } from './layout/layout/layout';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Layout },
];
