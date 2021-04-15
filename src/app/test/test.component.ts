import { Component } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent {
    title = 'PracticeAngular';
    heroTitle = 'Hero Component'
    test() {

    }

    changeTitle(event: string) {
        this.title = event;
    }
}