import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () => import('./main/main.module').then((mod) => mod.MainModule),
    data: {preload: true},
    canLoad: [AuthGuard],
  },
  {
    path: 'credit-card',
    loadChildren: () =>
      import('./credit-card/credit-card.module').then((mod) => mod.CreditCardModule),
    data: {preload: true},
    canLoad: [AuthGuard],
  },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
