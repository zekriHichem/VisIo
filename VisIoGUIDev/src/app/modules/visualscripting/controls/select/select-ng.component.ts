import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';



@Component({
  selector: 'app-select-ng',
  templateUrl: './select-ng.component.html',
  styleUrls: ['./select-ng.component.css']
})
export class SelectNgComponent implements OnInit {
  @Input() value: DatabasesTable[] ;

  // tslint:disable-next-line:ban-types
  @Input() change: Function;
  // tslint:disable-next-line:ban-types
  @Input() mounted: Function;
  @Input() selected: string;

  constructor() { }

  ngOnInit(): void {
    this.mounted();
  }

}
