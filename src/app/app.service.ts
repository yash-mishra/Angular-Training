import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TestUser } from "./models/testUser.model";

@Injectable()
export class AppService {
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

}