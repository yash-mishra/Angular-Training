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
        private appService: AppService) { }

    title = 'PracticeAngular';
    dataValue: TestUser;

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
}