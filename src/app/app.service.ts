import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TestUser } from "./models/testUser.model";
import { jsonData } from "C:/Users/abhashshukla/Desktop/New folder/Angular-Training/src/jsonData.json" ;

@Injectable()
export class AppService {
    private dataList=[new TestUser('Name 1', "Address 1"), new TestUser("Name 2", "Address 2"), new TestUser("Name 3", "Address 3"), new TestUser("Name 3", "Address 3")]

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
    }

    getDataList() {
        alert(this.dataList)
        return this.dataList;
    }

    getDataListFromJson() {
        alert(jsonData);
        return jsonData;
    }

}