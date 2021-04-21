import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
  getData3()
  {
    let url="https://jsonplaceholder.typicode.com/todos/";
    return this.http.get(url);            
  }
  getData2()
  {
    return{
      topic:'data from service',
      age:35,
      id:100
    }
  }
}
