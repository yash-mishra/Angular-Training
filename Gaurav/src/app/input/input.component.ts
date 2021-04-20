import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  constructor(private route: Router) { }

  title='Input Component'
  titlex=' '

  ngOnInit(): void {
  }

  redirecttochild(val){
    this.route.navigate(['input/child'])
    this.titlex=val
  }
}
