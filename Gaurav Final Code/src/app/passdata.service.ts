import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import {TestUser} from'./error/services/services.module';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PassDataService {
  constructor(private httpClient: HttpClient) { }
  
  private testUserDetails = new BehaviorSubject<TestUser>(null);

  public readonly testUserDetails$ = this.testUserDetails.asObservable();

  setData(data: TestUser) {
    this.testUserDetails.next(data);
  }

  getData() {
    return this.testUserDetails.value;
  }

  getTestUserData() {
    this.httpClient.get("./assets/data.json").subscribe((data: TestUser) => {
        if (!!data) {
            this.setData(data);
        }
    })
  }}


