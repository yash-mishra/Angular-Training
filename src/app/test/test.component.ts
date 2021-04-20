import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
    constructor(private appService: AppService) { }

    dataValue

    ngOnInit() {
        this.appService.getTestUserData();
    }

    title = 'Test Component';
    heroTitle = 'Hero Component'

    changeTitle(event: string) {
        this.title = event;
    }
}