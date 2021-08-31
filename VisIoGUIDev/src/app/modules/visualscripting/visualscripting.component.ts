import {AfterViewInit, Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {BddComponent} from './components/bdd.component';
import {PcaComponent} from './components/pca.component';
import {DFTComponent} from './components/dft.component';
import ConnectionPlugin from 'rete-connection-plugin';
import ContextMenuPlugin from 'rete-context-menu-plugin';
import {Engine, NodeEditor} from 'rete';
import {AngularRenderPlugin} from 'rete-angular-render-plugin';
import DockPlugin from 'rete-dock-plugin';
import {FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material';
import {SessionSpark} from '../../models/SessionSpark';
import {LinechartComponent} from './components/linechart.component';
import {UmapComponent} from './components/umap.component';
import {ScatterplotComponent} from './components/scatterplot.component';
import {ServerStatus} from '../../models/ServerStatus';
import {SMAComponent} from './components/sma.component';
import {environment} from '../../../environments/environment';



@Component({
  selector: 'app-visualscripting',
  templateUrl: './visualscripting.component.html',
  styleUrls: ['./visualscripting.component.css']
})
export class VisualscriptingComponent implements OnInit, AfterViewInit {

  @ViewChild('nodeEditor', {static: true}) el: ElementRef;

  editor = null;
  engine;
  selectSessionSpark =   new FormControl('', Validators.required);
  databaseType: DatabaseRete[] = [];
  user;
  url_ss = environment.url_spark;
  url_interface_management = environment.url_interface;


  constructor (private http: HttpClient, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('username');

    this.http.get(this.url_ss + 'getallsessions/' + this.user).subscribe((res: SessionSpark[]) => {
      res.forEach(e => {
        if (e.state == 'idle')
          this.databaseType.push({value: e.id.toString(), viewValue: 'session' + e.id.toString()}) ;
      });
    });


  }

  ngAfterViewInit(): void {
    this.http.get(this.url_interface_management + 'getbddsTables/' + this.user).subscribe((dbs:DatabasesTable[]) => {
      this.http.get(this.url_interface_management + 'getserver/' + this.user).subscribe((server:ServerStatus)=> {
        const container = this.el.nativeElement;
        const components = [new BddComponent(dbs), new PcaComponent(this.http, server) ,
          new DFTComponent(this.http, server), new LinechartComponent(), new UmapComponent(this.http),
          new ScatterplotComponent(),new SMAComponent(this.http)];
        this.editor = new NodeEditor('demo@0.2.0', container);
        this.editor.use(ConnectionPlugin);
        this.editor.use(AngularRenderPlugin);
        this.editor.use(ContextMenuPlugin);
        this.engine = new Engine('demo@0.2.0');
        components.map(c => {
          this.editor.register(c);
          this.engine.register(c);
        });

        var i = 0;
        var ed = this.editor
        this.editor.on("process", function() {
          i ++;
          if (i == ed.nodes.length) {
            console.log("end")
          }

        });

        this.editor.view.resize();

      });
          });


  }

  async run() {
    sessionStorage.setItem("sessionId", this.selectSessionSpark.value.value);
    if (this.selectSessionSpark.valid) {
      var json = this.editor.toJSON();
      console.log(json);
      await this.editor.clear();
      await this.editor.fromJSON(json);
      await this.engine.abort();
      await this.engine.process(this.editor.toJSON(),null,this.editor);
    }
  }


  stop() {
  }

}
