import {MainComponent} from './main.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreditCardListsComponent} from './credit-card-lists/credit-card-lists.component';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'list',
        component: CreditCardListsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
