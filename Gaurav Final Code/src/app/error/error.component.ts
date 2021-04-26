import { Component, OnInit } from '@angular/core';
import {PassDataService} from 'src/app/passdata.service'
import {TestUser} from './services/services.module'

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  constructor(private passDataService: PassDataService) { }

    dataValue: TestUser;

    ngOnInit() {
      this.addListener();
  }

  addListener() {
      this.passDataService.testUserDetails$.subscribe(data => {
          this.dataValue = data;
      })
  }

  getData() {
      this.passDataService.getTestUserData();
  }
}
