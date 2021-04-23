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
    itemSize=0
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

    addItem() {
        if(this.check == true) {
            this.items.push(this.current);
            this.current++;
            this.itemSize++;
        }
    }
    removeItem(){
        if(this.check == true && this.current>1) {
            const index =this.items.indexOf(this.current - 1, 0);
                if (index > -1) {
                this.items.splice(index, 1);
                }
            this.itemSize--;
            this.current--;
        }
    }
}
