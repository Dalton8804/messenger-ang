import { Component, OnInit } from '@angular/core';
import { Action } from '../action'


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  auth = {
    key: ""
  }

  actions: Action[] = [
    {name: 'Light 1', id: 1},
    {name: 'Light 2', id: 2},
    {name: 'Light 3', id: 3},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  selectedAction?: Action;
  actionRequest(action: Action){
    this.selectedAction = action;
  }
}
