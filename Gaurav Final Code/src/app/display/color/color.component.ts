import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  
  constructor() { }
  @Output() parentx:EventEmitter<string>=new EventEmitter<string>()
  ngOnInit(): void {
  }
  colorval(color1){
    this.parentx.emit(color1)
  }
}
