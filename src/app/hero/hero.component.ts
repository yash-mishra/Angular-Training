import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';
import { TestUser } from '../models/testUser.model';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
    constructor(
        private appService: AppService) { 
            this.dataList = HeroComponent.dataList;
        }

    title = 'PracticeAngular';
    dataValue: TestUser;
    static dataList=[];
    dataList=[]
    @Input() heroTitle: string;
    @Output() eventVariable: EventEmitter<string> = new EventEmitter<string>();
        
    ngOnInit() {
        this.addListener();
        //this.mapValue()
    }

    addListener() {
        this.appService.testUserDetails$.subscribe(data => {
            this.dataValue = data;
        })
    }

    getData() {
        //this.appService.getTestUserData();
        this.mapValue();
    }

    mapValue() {
        this.dataValue = this.appService.getData();
    }

    emitData() {
        this.eventVariable.emit('Emmited Data')
    }

    addToList(name, address) {
        HeroComponent.dataList.push(new TestUser(name, address))
    }

    populateDataList() {
        var tempList: TestUser[];
        tempList = this.appService.getDataList();
        for (let i = 0; i < tempList.length; i++){
            HeroComponent.dataList.push(tempList[i]);
        }
        //this.dataList.push(this.appService.getDataList());
    }

    populateDataListFromJson() {
        var tempList = this.appService.getDataListFromJson();
        for (let i = 0; i < tempList.length; i++) {
            HeroComponent.dataList.push(new TestUser(tempList[i].name, tempList[i].address));
        }
    }
}