import { Component } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test-child.component.html',
    styleUrls: ['./test-child.component.scss']
})
export class TestChildComponent {
    title = '<b>Called the child</b>';
    heroTitle: string;
    test() {

    }

    callback(d1, d2): string {
        if (!d2) {
            d2 = 'Component';
        }

        return d1 + ' ' + d2;
    }

    changeTitle(event: string) {
        this.title = event;
    }
}
