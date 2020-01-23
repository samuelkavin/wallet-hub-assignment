import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RatingModule} from 'ng-starrating';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {SharedModule} from '../shared/shared.module';
import {CardComponent} from './card/card.component';
import {CardListComponent} from './card-list/card-list.component';

@NgModule({
  declarations: [MainComponent, CardComponent, CardListComponent],
  imports: [CommonModule, MainRoutingModule, RatingModule, FormsModule, SharedModule],
  exports: [CardListComponent],
})
export class MainModule {}
