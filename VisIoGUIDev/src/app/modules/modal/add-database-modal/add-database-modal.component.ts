import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {DbStatus} from '../../../models/DbStatus';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-add-database-modal',
  templateUrl: './add-database-modal.component.html',
  styleUrls: ['./add-database-modal.component.scss']
})
/*
* Modal to add Bdds connection
*/
export class AddDatabaseModalComponent implements OnInit {

  url = environment.url_interface ;
  selectedKind: string;
  selectFormControl =   new FormControl('', Validators.required);
  databaseType: DatabaseRete[] = [
    {value: 'Mysql', viewValue: 'Mysql'},
    {value: 'Hive', viewValue: 'Hive'},
    {value: 'Postgress', viewValue: 'Postgress'},
    {value: 'File P', viewValue: 'File P'},
  ];
  username: any;
  password: any;
  hostname: any;
  port: any;
  dbname: any;
  user: String;
  datetime: string;


  constructor(private http: HttpClient,
              private spinnerService: Ng4LoadingSpinnerService,
              private mdr: MatDialogRef<AddDatabaseModalComponent>,
              @Inject(MAT_DIALOG_DATA) data: string
  ) {
  }
  CloseDialog() {
    this.mdr.close(false);
  }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('username');
    this.spinnerService.hide();
  }


  addNewBdd() {
      this.spinnerService.show();
      const formData = new FormData();
      formData.append('host' , this.hostname);
      formData.append('port' , this.port.toString());
      formData.append('typed' , this.selectFormControl.value.value);
      formData.append('user' , this.username);
      formData.append('password' , this.password);
      formData.append('db' , this.dbname);
      formData.append('datetime' , this.datetime);

    this.http.post(this.url + 'addbdd/' + this.user, formData).subscribe((res:DbStatus) => {
        this.mdr.close();
      });


  }

}
