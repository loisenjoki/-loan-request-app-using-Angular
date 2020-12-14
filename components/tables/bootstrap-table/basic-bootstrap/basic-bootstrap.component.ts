import {Component, Inject, OnInit} from '@angular/core';
import {RestApiService} from '../../../../_services/rest-api.service';

@Component({
  selector: 'app-basic-bootstrap',
  templateUrl: './basic-bootstrap.component.html',
  styleUrls: ['./basic-bootstrap.component.scss']
})
export class BasicBootstrapComponent implements OnInit {

  data = [];

  constructor(public restApi: RestApiService,
  ) {
  }

  ngOnInit() {
    this.restApi.getstatement().subscribe((data: any[]) => {
      this.data = data;
      console.log('>>>>>>>>>>>', data);
    });
  }
}

