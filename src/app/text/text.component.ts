import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {



  ngOnInit(): void {
  }
  constructor(private route: Router) { }

  redirectToBlue()
  {
    this.route.navigate(['blue'])
  }
}
