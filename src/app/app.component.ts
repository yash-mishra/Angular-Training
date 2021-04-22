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

  redirectToTest() {
    this.route.navigate(['test'])
  }

  redirectToHero() {
    this.route.navigate(['hero'])
  }

  render() {
    return "<button> This is 2nd Button </button>"
  }
}
