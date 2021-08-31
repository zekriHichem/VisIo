import {Component, ComponentFactoryResolver, Inject, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {AddDatabaseModalComponent} from '../modal/add-database-modal/add-database-modal.component';
import {HttpClient} from '@angular/common/http';
import {DbStatus} from '../../models/DbStatus';
import {DatabaseComponent} from './database/database.component';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html',
  styleUrls: ['./databases.component.scss']
})
/*
*
* this component is for manage databases connection
* include an other dynamique component to show defrent connections
*
*/
export class DatabasesComponent implements OnInit {
  // dynamique component card for databases connection
  matDialogRef: MatDialogRef<AddDatabaseModalComponent>;
  // this variable is for the future use if we went to add auth
  user: String;
  //url to MS of interface management
  url_interface_mg = environment.url_interface ;

  // container for database card
  @ViewChild('container', {static: true, read: ViewContainerRef}) container;

 // http for http connection REST
  constructor (private http: HttpClient, private resolver: ComponentFactoryResolver ,private matDialog: MatDialog) { }

  // in loading page
  ngOnInit() {
    /*
    * here we get all Bdds connections
    */
    this.user = sessionStorage.getItem('username');
    this.getAllBdds();
  }

  getAllBdds(){
    /*
    * Connect with Interface MS to get Bdds connections
    * return Bdstatus
    */
    this.http.get(this.url_interface_mg + 'getallbdd/' + this.user).subscribe((res: DbStatus[]) => {
      res.forEach(e => {
        console.log(e);
        const ref = this.container.createComponent(this.resolver.resolveComponentFactory(DatabaseComponent));
        ref.instance.ref = ref;
        ref.instance.status = e.status ;
        ref.instance.idd = e.id;
        ref.instance.typed = e.typed;
        ref.instance.host = e.host;
        ref.instance.port = e.port;
        ref.instance.db = e.db;
        if (e.status == 'off') {
          ref.instance.bdd_status = false;
        } else  {
          ref.instance.bdd_status = true;
        }
      });
    });

  }
  refTable() {
    this.container.clear();
    this.getAllBdds();
  }

  OpenModal() {
    /*
    * open modal to add Bdd connection
    */
    this.matDialogRef = this.matDialog.open(AddDatabaseModalComponent, {
      disableClose: true
    });

    this.matDialogRef.afterClosed().subscribe(res => {
      this.container.clear();
      this.getAllBdds();
    });
  }
}
