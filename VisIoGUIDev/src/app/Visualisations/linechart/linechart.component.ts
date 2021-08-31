import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {
  url: string;
  time = [];
  series = [[1, 3, 6], [10, 0, 2]];
  public data = [];
  public graph = {
    data: this.data,
    layout: {width: window.innerWidth - 20, height: window.innerHeight - 20, title: 'your Plot'}
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    this.url = environment.url_sampling
    this.route.paramMap.subscribe(params => {
      this.http.get(this.url + 'getSample/linechart' + '/' + params.get('input') + '/' + params.get('begin') + '/' + params.get('end') + '/' + params.get('datetime')).subscribe((result:Sample[]) => {
        result.forEach(e => {
          if (e.cols == params.get("datetime") ){
            console.log(e.series);
            this.data.forEach(e2 => {
              e2.x = e.series
            });
          }else {
            this.data.push({
              y: e.series,
              type: "scatter",
              mode: "lines",
              name: e.cols
            });
          }


        });
      });
    });


  }
}
