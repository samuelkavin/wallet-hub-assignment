import {Component, OnInit, Input} from '@angular/core';
import {ICreditCard} from 'src/app/main/card-list/card-list.interface';

@Component({
  selector: 'app-credit-card-content',
  templateUrl: './credit-card-content.component.html',
  styleUrls: ['./credit-card-content.component.scss'],
})
export class CreditCardContentComponent implements OnInit {
  @Input() cardDetails: ICreditCard;

  constructor() {}

  ngOnInit() {}
}
