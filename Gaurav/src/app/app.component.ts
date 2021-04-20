import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route: Router) { }

  title = 'Final';

  redirecttoinput(){
    this.route.navigate(['input'])
  }
  redirecttodisplay(){
    this.route.navigate(['display'])
 }
  redirecttoerror(){
    this.route.navigate(['error'])
  }
}
