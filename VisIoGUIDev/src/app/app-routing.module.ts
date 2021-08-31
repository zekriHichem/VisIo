import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

import {SparkContextComponent} from './modules/spark-context/spark-context.component';


import {VisualscriptingComponent} from './modules/visualscripting/visualscripting.component';
import {DatabasesComponent} from './modules/databases/databases.component';
import {AppComponent} from './app.component';
import {LinechartComponent} from './Visualisations/linechart/linechart.component';
import {ScatterplotComponent} from './Visualisations/scatterplot/scatterplot.component';
import {FirstpageComponent} from './Landing/firstpage/firstpage.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent
  }, {
      path: 'SparkContext',
      component: SparkContextComponent
    }, {
    path: 'databases',
    component: DatabasesComponent
  },
    {
      path: 'visual',
      component: VisualscriptingComponent
    }
  ]
},{
  path: '',
  component: FirstpageComponent,
  children: [{
    path: 'hello',
    component: FirstpageComponent
  }
  ]
},
  {
    path: '',
    component: AppComponent,
    children: [{
      path: 'linechart/:input/:begin/:end/:datetime',
      component: LinechartComponent
    },
      {
        path: 'scatterplot/:input',
        component: ScatterplotComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
