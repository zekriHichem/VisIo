import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-add-session-modal',
  templateUrl: './add-session-modal.component.html',
  styleUrls: ['./add-session-modal.component.scss']
})

/*
* Modal to add session Spark
*/
export class AddSessionModalComponent implements OnInit {
  url_spark_management = environment.url_spark ;
  selectedKind: string;
  constructor(private http: HttpClient,
              private spinnerService: Ng4LoadingSpinnerService,
              private mdr: MatDialogRef<AddSessionModalComponent>,
              @Inject(MAT_DIALOG_DATA) data: string
              ) {
  }
  CloseDialog() {
    this.mdr.close(false);
  }

  ngOnInit(): void {
    this.spinnerService.hide();
  }


  addNewsession() {
    this.spinnerService.show();
    console.log(this.selectedKind);
    this.http.get(this.url_spark_management + 'addsession/' + sessionStorage.getItem('username') + '/' + this.selectedKind).subscribe(res => {
      this.spinnerService.hide();
      this.mdr.close();
    });
  }
}
