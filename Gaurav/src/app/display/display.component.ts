import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor() { }
  colorval='Black'
  ngOnInit(): void {
  }
  parentx(event:string){
    this.colorval=event
  }
}
