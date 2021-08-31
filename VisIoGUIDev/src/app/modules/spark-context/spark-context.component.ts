import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServerStatus} from '../../models/ServerStatus';
import {SessionSpark} from '../../models/SessionSpark';
import {MatDialog, MatDialogRef, MatPaginator, MatTableDataSource} from '@angular/material';
import {AddSessionModalComponent} from '../modal/add-session-modal/add-session-modal.component';
import {SessionSparkTable} from '../../models/SessionSparkTable';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-spark-context',
  templateUrl: './spark-context.component.html',
  styleUrls: ['./spark-context.component.scss']
})
export class SparkContextComponent implements OnInit {
  // variables table sessions
  TABLE_Session: SessionSparkTable[] = [];
  displayedColumns: string[] = ['Session Id', 'Kind', 'Status', 'Action','Logs'];
  dataSource = new MatTableDataSource<SessionSpark>(this.TABLE_Session);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  // end variables table sessions
  // conf variable s
  url_interface_manament =  environment.url_interface ;
  url_spark_management =  environment.url_spark;
  user = '';
  matDialogRef: MatDialogRef<AddSessionModalComponent>;
  // end conf variables
  livyAdr: string;
  livyPort: number;
  // end HTML variables

  serverExist = false;
  serverruning = false;
  constructor(private http: HttpClient, private matDialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.user = sessionStorage.getItem('username') ;
    console.log(this.url_interface_manament);
    this.http.get(this.url_interface_manament + 'getserver/' + this.user).subscribe((res: ServerStatus) => {
      console.log(res);
      if (res.port == 0) {
        this.serverExist = false;
        this.serverruning = false;
      } else {
        this.serverExist = true;
        this.livyAdr = res.host;
        this.livyPort = res.port;
        if (res.status == 'off') {
          this.serverruning = false;
        } else {
          this.serverruning = true;
          this.getAllSessions();
        }
      }
    });
  }
  // Click functions


  addNewCluster() {
    const formData = new FormData();
    formData.append('host' , this.livyAdr);
    formData.append('port' , this.livyPort.toString());

    this.http.post(this.url_interface_manament + 'updateserver/' + this.user, formData).subscribe((res: ServerStatus) => {
      this.serverExist = true;
      this.livyAdr = res.host;
      this.livyPort = res.port;
      if (res.status == 'off') {
        this.serverruning = false;
      } else {
        this.serverruning = true;
      }
    })
  }

  sessionClick(row: any) {
    console.log('hello');
  }
  OpenModal() {
    this.matDialogRef = this.matDialog.open(AddSessionModalComponent, {
      disableClose: true
    });

    this.matDialogRef.afterClosed().subscribe(res => {
      this.getAllSessions();
    });
  }


  refTable() {
    this.getAllSessions();
  }

  deleteSession(element: any) {
    if (confirm('This session will be deletet with all statements')) {
      this.http.get(this.url_spark_management + 'deletesession/' + this.user + '/' + element.id.toString()).subscribe((res) => {
        console.log(res);
        this.getAllSessions();
      });
    } else {
      console.log('notok');
    }
  }
  // end click functions
  // other functions

  getAllSessions() {
    this.TABLE_Session = [];
    this.http.get(this.url_spark_management + 'getallsessions/' + this.user ).subscribe((res: SessionSpark[]) => {
      res.forEach(e => {
        this.TABLE_Session.push({id: e.id, kind: e.kind , state: e.state, logs: "http://" + this.livyAdr + ":" + this.livyPort + "/ui/session/" + e.id + "/log"  });
        this.dataSource = new MatTableDataSource<SessionSpark>(this.TABLE_Session);
      });
    });
  }
  // end other functions
}
