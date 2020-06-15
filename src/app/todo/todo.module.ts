import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [TodoComponent, TodoListComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [TodoComponent]
})
export class TodoModule { }
