import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-number-ng',
  templateUrl: './number-ng.component.html',
  styleUrls: ['./number-ng.component.css']
})
export class NumberNgComponent implements OnInit {
  @Input() value: number;
  @Input() readonly: boolean;
  // tslint:disable-next-line:ban-types
  @Input() change: Function;
  // tslint:disable-next-line:ban-types
  @Input() mounted: Function;
  constructor() {
  }

  ngOnInit(): void {
    this.mounted();

  }

}
