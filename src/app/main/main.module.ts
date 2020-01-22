import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RatingModule} from 'ng-starrating';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {SharedModule} from '../shared/shared.module';
import {CreditCardListsComponent} from './credit-card-lists/credit-card-lists.component';
import {CreditCardDetailsComponent} from './credit-card-details/credit-card-details.component';

@NgModule({
  declarations: [MainComponent, CreditCardListsComponent, CreditCardDetailsComponent],
  imports: [CommonModule, MainRoutingModule, RatingModule, SharedModule],
})
export class MainModule {}
