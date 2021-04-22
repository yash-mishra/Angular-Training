import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
    check:boolean
    items=[]
    current=1
    constructor(private appService: AppService) { 
        this.check = true;
    }

    dataValue

    ngOnInit() {
        this.appService.getTestUserData();
    }

    title = 'Test Component';
    heroTitle = 'Hero Component'

    changeTitle(event: string) {
        this.title = event;
    }

    changeCheck() {
        if (this.check == true)
            this.check = false;
        else 
            this.check = true;
    }

    changeItem() {
        if(this.check == true) {
            this.items.push(this.current);
            this.current++;
        }
            
    }
}