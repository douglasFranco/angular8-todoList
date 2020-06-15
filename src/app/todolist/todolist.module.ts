import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { TodolistRoutingModule } from './todolist-routing.module';
import { TodolistComponent } from './todolist.component';


@NgModule({
  declarations: [TodolistComponent],
  imports: [
    CommonModule,
    TodolistRoutingModule,
    FormsModule
  ]
})
export class TodolistModule { }
