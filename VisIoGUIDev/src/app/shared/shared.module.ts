import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule,
  MatCardModule, MatPaginatorModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';

import { ChartModule } from 'angular-highcharts';

import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CardComponent,


  ],
  entryComponents: [
    CardComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    ChartModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatCardModule,
    FormsModule,
    MatPaginatorModule,

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CardComponent,
  ]
})
export class SharedModule { }
