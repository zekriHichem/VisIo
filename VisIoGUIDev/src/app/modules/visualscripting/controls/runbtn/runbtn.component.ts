import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-runbtn',
  templateUrl: './runbtn.component.html',
  styleUrls: ['./runbtn.component.css']
})
export class RunbtnComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  @Input() run: Function;
  // tslint:disable-next-line:ban-types
  @Input() mounted: Function;
  constructor() { }

  ngOnInit(): void {
    this.mounted();
  }

}
