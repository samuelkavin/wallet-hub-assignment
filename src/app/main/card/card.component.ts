import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {trigger, transition, animate, style} from '@angular/animations';

import {ICreditCard} from '../card-list/card-list.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [style({opacity: 0}), animate(300, style({opacity: 1}))]),
    ]),
  ],
})
export class CardComponent implements OnInit {
  @Input() card: ICreditCard;
  isShowInput: boolean;
  customerName: string;
  constructor(private router: Router) {}

  ngOnInit() {}

  onClick(name: any) {
    this.isShowInput = true;
    if (name) {
      this.router.navigate(['/credit-card', {name}]);
    }
  }
}
