import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AnimationOptions} from 'ngx-lottie';



@Component({
  selector: 'app-select-ng',
  templateUrl: './loading-ng.component.html',
  styleUrls: ['./loading-ng.component.css']
})
export class LoadingNgComponent implements OnInit {
  options: AnimationOptions = {
    path: 'https://assets1.lottiefiles.com/packages/lf20_aUotIn.json',
  };
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
