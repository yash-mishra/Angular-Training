import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() parentFunction:EventEmitter<any>= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  sendData()
  {
    let data2={name:'anu', age:22}
    this.parentFunction.emit(data2)
  }

}
