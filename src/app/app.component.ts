import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private route: Router) { }

  title = 'PracticeAngular';

  redirectToHero() {
    this.route.navigate(['hero'])
  }

  redirectToTest() {
    this.route.navigate(['test'])
  }
  redirectTotext()
  {
    this.route.navigate(['text'])
  }
  redirectToBlue()
  {
    this.route.navigate(['blue'])
  }
  redirectTochild()
  {
    this.route.navigate(['test-child'])
  }
}
