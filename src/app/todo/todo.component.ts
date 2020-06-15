import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() {}
 
  ngOnInit() {}

  todos = [
    {
      id: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      done: false
    },
    {
      id: 2,
      description: 'lass aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos',
      done: false
    },
    {
      id: 3,
      description: 'estibulum nec leo dignissim, ullamcorper justo blandit, varius nibh',
      done: false
    }
  ]

}

