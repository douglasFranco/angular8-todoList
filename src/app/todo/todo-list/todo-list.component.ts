import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Todo from './todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class TodoListComponent implements OnInit {
  @Input() private todos: Todo[] 
  private selectedTodo: Todo
  private todoForm: any = this.fb.group({    
    description: ''
  })
  

  constructor(private fb: FormBuilder,) { }  

  ngOnInit(): void {
    this.todos = [...this.todos];
    this.todoForm.value.description = '';
    this.selectedTodo = null;
  }

  get form() { return this.todoForm.controls; }

  private ableToEdit (todo) {    
    this.selectedTodo = todo;
    this.todoForm.value.description = todo.description;
  }

  private addTodo(): void {
    if(this.selectedTodo !== null){
      this.confirmEdition();
      return;
    }
    this.todos.push({
      id: this.calcTodoId(),
      description: this.todoForm.value.description,
      done: false
    });
    this.todoForm.value.description = '';
  }

  private calcTodoId(): number {
    let id = 1;
    if (this.todos.length > 0){
      id = this.todos.slice(-1)[0]['id'];
      id ++;
    }
    return id;
  }

  private confirmEdition() {
    this.selectedTodo.description = this.todoForm.value.description;
    this.todoForm.value.description = '';
    this.selectedTodo = null;
  }

  private deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }  

  private markAsDone(todo): void {
    todo.done = !todo.done;
  }

  onSubmit() {
    const desc = this.todoForm.value.description;
    if(!desc) return;
    this.addTodo();
  }
}
