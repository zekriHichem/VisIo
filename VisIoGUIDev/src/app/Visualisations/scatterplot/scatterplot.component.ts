import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.scss']
})
export class ScatterplotComponent implements OnInit {
  public data = [];
  time = [];
  timescale = [];
  public graph = {
    data: this.data,
    layout: {width: window.innerWidth - 20, height: window.innerHeight - 20, title: 'your Plot'}
  };
  url: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.url = environment.url_sampling;

    this.route.paramMap.subscribe(params => {
      var x = [];
      var y = [];
      var t = [];
      var scaletime = [];
      var names = [];
      this.http.get(this.url + 'getSample/scatterchart/' + params.get('input') ).subscribe((res: Sample[]) => {
        res.forEach(e=>{
          if(e.series.length > 3){
            alert("Check your data , high dimension")
          }else {


          if (e.series.length == 2) {
            let y1 = e.series.pop();
            let t1 = e.series.pop();
            y.push(y1);
            t.push(t1);
          }else {
            let x1= e.series.pop();
            let y1 = e.series.pop();
            let t1 = e.series.pop();

            x.push(x1);
            y.push(y1);
            t.push(t1);
          }
          names.push(e.cols);
          }

        });
        console.log(names);
        var i = 0 ;
         x.forEach(e => {
          scaletime.push(i);
          i = i + 1 ;
        });
        this.data.push(
          {
            y: y,
            x: t,
            text: names,
            mode: 'markers',
            marker: {
              size: 10,
              color: scaletime,
              colorscale: 'YlOrRd',
              showscale: true,
              colorbar: {
                title: 'Time',
                titleside: 'bottom',
                outlinewidth: 1,
                outlinecolor: 'black',
                tickvals: [0, scaletime.length-1, Math.trunc(scaletime.length/2),Math.trunc(scaletime.length/4) , Math.trunc(scaletime.length/4) + Math.trunc(scaletime.length/2)],
                ticktext:x,
                tickfont: {
                  family: 'Lato',
                  size: 14,
                  color: 'green'
                }
              }
            },
          }
        );

          });




    });


  }

}
