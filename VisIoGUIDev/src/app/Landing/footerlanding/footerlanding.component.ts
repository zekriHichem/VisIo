import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footerlanding',
  templateUrl: './footerlanding.component.html',
  styleUrls: ['./footerlanding.component.scss']
})
export class FooterlandingComponent implements OnInit {
  test : Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
