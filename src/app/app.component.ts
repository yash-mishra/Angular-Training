import { Component } from '@angular/core';
import {ServicesService} from './services.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular app';
  topic=""; 
  constructor(private user:ServicesService)
  {
console.warn(this.user.getData2())
this.topic=this.user.getData2().topic
  }
    name3="anu"
  currentVal="";
  show=false;
  color="orange";
  data="hello";
  name=""
  updateColor()
  {
    this.color="blue"
  }
  parentFunction(data2)
  {
    console.warn(data2)
    this.name=data2.name;
  }
  getName()
  {
    return this.name3
  }
  getName2(name)
  {
    alert(name)
  }
  getVal(val)
  {
    alert(val)
    this.currentVal=val
  } 
  obj={
    name:'Kelly',
    age:20
  }
  arr=['bruce','kelly','john']
  siteUrl=window.location.href
  getValues(val)
  {
    console.warn(val)
  }
}
