import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';



@Component({
  selector: 'app-select-ng',
  templateUrl: './check-ng.component.html',
  styleUrls: ['./check-ng.component.css']
})
export class CheckNgComponent implements OnInit {
  @Input() value: boolean ;

  // tslint:disable-next-line:ban-types
  @Input() change: Function;
  // tslint:disable-next-line:ban-types
  @Input() mounted: Function;
  @Input() v: any;
  constructor() { }

  ngOnInit(): void {
    this.mounted();
  }

}
