import {MainComponent} from './main.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CardListComponent} from './card-list/card-list.component';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: CardListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
