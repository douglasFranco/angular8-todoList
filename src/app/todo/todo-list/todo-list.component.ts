import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import Todo from './todo'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TodoListComponent implements OnInit {

  @Input() todos: any
  description: string  
  selectedTodo: Todo

  ngOnInit() {
    this.todos = [...this.todos]
    this.description = ''
    this.selectedTodo = null
  }

  ableToEdit (todo) {    
    this.selectedTodo = todo
    this.description = todo.description
  }

  addTodo(todo): void {
    if(!this.description) return
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
    this.todos = this.todos.filter(todo => todo.id !== id)
  }  

  markAsDone(todo): void {
    console.log(todo)
    todo.done = !todo.done
    
  }

}
