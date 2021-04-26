import { Component, OnInit,OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {

  constructor() { }

  @Input() titlex
  ngOnInit(): void {
  }
  
  ngOnChanges(){
    alert("LIfeCycle Hook Implementation")
  }
}
