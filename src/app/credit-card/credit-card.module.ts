import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {CreditCardRoutingModule} from './credit-card-routing.module';
import {CreditCardDetailsComponent} from './credit-card-details/credit-card-details.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [CreditCardDetailsComponent],
  imports: [CommonModule, CreditCardRoutingModule, ReactiveFormsModule, SharedModule],
})
export class CreditCardModule {}
