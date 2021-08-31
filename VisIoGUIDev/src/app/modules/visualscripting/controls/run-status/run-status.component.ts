import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-number-ng',
  templateUrl: './run-status.component.html',
  styleUrls: ['./run-status.component.scss']
})
export class RunStatusNgComponent implements OnInit {
  @Input() value: number;
  @Input() readonly: boolean;
  @Input() success: boolean;

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

