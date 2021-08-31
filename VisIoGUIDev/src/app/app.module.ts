import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';

import {FormsModule} from '@angular/forms';
import {VisualscriptingModule} from './modules/visualscripting/visualscripting.module';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import { LinechartComponent } from './Visualisations/linechart/linechart.component';

import { ScatterplotComponent } from './Visualisations/scatterplot/scatterplot.component';
import {LottieModule} from 'ngx-lottie';
import {FirstpageComponent} from './Landing/firstpage/firstpage.component';
import { HeaderlandingComponent } from './Landing/headerlanding/headerlanding.component';
import { FooterlandingComponent } from './Landing/footerlanding/footerlanding.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';

PlotlyModule.plotlyjs = PlotlyJS;
export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}
@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
    ScatterplotComponent,
    FirstpageComponent,
    HeaderlandingComponent,
    FooterlandingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    VisualscriptingModule,
    FormsModule,
    PlotlyModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
