import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent {
    title = "Shourya's Angular Project";
    heroTitle = 'Shourya is a Hero';
    test() {

    }
    constructor(private route: Router) { }

  redirectTochild()
  {
    this.route.navigate(['test/child'])
  }
    changeTitle(event: string) {
        this.title = event;
    }
}
