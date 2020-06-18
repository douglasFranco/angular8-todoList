import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import Todo from './todo'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TodoListComponent implements OnInit {

  @Input() private todos: Todo[]
  private description: string  
  private selectedTodo: Todo

  ngOnInit() {
    this.todos = [...this.todos]
    this.description = ''
    this.selectedTodo = null
  }

  private ableToEdit (todo) {    
    this.selectedTodo = todo
    this.description = todo.description
  }

  private addTodo(todo): void {
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

  private calcTodoId(): number {
    let id: number = 1
    if (this.todos.length > 0){
      id = this.todos.slice(-1)[0]['id']
      id ++
    }
    return id
  }

  private confirmEdition() {
    this.selectedTodo.description = this.description
    this.description = ''
    this.selectedTodo = null
  }

  private deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }  

  private markAsDone(todo): void {
    console.log(todo)
    todo.done = !todo.done
    
  }

}
