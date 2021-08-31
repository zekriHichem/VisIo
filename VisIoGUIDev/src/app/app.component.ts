import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dashboard';

  ngOnInit(): void {
    sessionStorage.setItem('username', 'Ahmed');
    sessionStorage.setItem('password', 'hicham');

    sessionStorage.setItem('host_interfaceMG' , 'http://127.0.0.1:5000/');
    sessionStorage.setItem('host_sessionMG' , 'http://127.0.0.1:5001/');
    sessionStorage.setItem('host_sampling' , 'http://127.0.0.1:5002/');
    sessionStorage.setItem('host_add' , 'http://127.0.0.1:5007/');
    // algorithme
    sessionStorage.setItem('host_umap' , 'http://127.0.0.1:5003/');
    sessionStorage.setItem('host_sma' , 'http://127.0.0.1:5006/');
    sessionStorage.setItem('host_pca' , 'http://127.0.0.1:5005/');
    sessionStorage.setItem('host_dft' , 'http://127.0.0.1:5004/');


    console.log(sessionStorage.getItem('username'));
  }
}
