import { Component, OnInit, Input } from '@angular/core';
import Todo from './todo'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  constructor() { }
  
  @Input() description: string
  todos: Todo[]
  selectedTodo: Todo

  ngOnInit() {
    this.description = ''
    this.selectedTodo = null
    this.todos = [
      {
        id: 1,
        description: 'First to-do item',
        done: false
      },
      {
        id: 2,
        description: 'Second to-do item',
        done: false
      },
      {
        id: 3,
        description: 'Third to-do item',
        done: false
      }
    ]
  }

  ableToEdit (todo) {
    this.selectedTodo = todo
    this.description = todo.description
  }

  addTodo(): void {
    if(this.selectedTodo !== null){
      this.confirmEdition()
      return
    }
    this.todos.push({
      id: this.calcTodoId(),
      description: this.description,
      done: false
    })
    this.description = ''
  }

  calcTodoId(): number {
    let id: number = 1
    if (this.todos.length > 0){
      id = this.todos.slice(-1)[0]['id']
      id ++
    }
    return id
  }

  confirmEdition() {
    this.selectedTodo.description = this.description
    this.description = ''
    this.selectedTodo = null
  }

  deleteTodo(id: number): void {
    console.log(id)
    this.todos = this.todos.filter(todo => todo.id !== id)
  }  

  markAsDone(todo): void {
    todo.done = !todo.done
  }

}
