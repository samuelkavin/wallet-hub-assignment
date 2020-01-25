import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreditCardDetailsComponent} from './credit-card-details/credit-card-details.component';

const creditCardRoutes: Routes = [
  {
    path: '',
    component: CreditCardDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(creditCardRoutes)],
  exports: [RouterModule],
})
export class CreditCardRoutingModule {}
