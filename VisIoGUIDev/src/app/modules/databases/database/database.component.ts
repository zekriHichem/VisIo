import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TableData} from '../../../models/TableData';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
/*
* this card to show Bdds connection
*/
export class DatabaseComponent implements OnInit {

  url_interface_management = environment.url_interface ;
  user = '';
  TABLE_Data: TableData[] = [];
  // tslint:disable-next-line:variable-name
  displayedColumns: string[] = ['Table_name', 'nbParametters', 'nbRow', 'Action'];
  dataSource = new MatTableDataSource<TableData>(this.TABLE_Data);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @Input() bdd_status: any;
  @Input() idd;
  @Input() typed;
  @Input() host;
  @Input() port;
  @Input() db;
  @Input() ref;

  // spinnerService is for loading
  constructor(private http: HttpClient, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.user = sessionStorage.getItem('username');
    this.dataSource.paginator = this.paginator;
    this.spinnerService.show();
    this.http.get(this.url_interface_management + 'getbdd/' + this.user + '/' + this.idd ).subscribe((res : TableData[]) => {
      console.log(res);
      res.forEach(e => {
        this.TABLE_Data.push(e);
        this.dataSource = new MatTableDataSource<TableData>(this.TABLE_Data);
      });
      this.spinnerService.hide();
    });
  }

}
