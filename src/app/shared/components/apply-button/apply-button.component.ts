import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-apply-button',
  templateUrl: './apply-button.component.html',
  styleUrls: ['./apply-button.component.scss'],
})
export class ApplyButtonComponent implements OnInit {
  @Input() type: any;
  @Input() css: any;
  @Input() disabled: any;
  constructor() {}

  ngOnInit() {}
}
