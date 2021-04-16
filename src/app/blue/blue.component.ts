import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.scss']
})
export class BlueComponent implements OnInit {

  constructor(private route: Router) { }

  redirectTotext()
  {
    this.route.navigate(['text'])
  }

  ngOnInit(): void {
  }

}
