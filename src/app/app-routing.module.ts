import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [  
  { path: 'todolist', loadChildren: () => import('./todolist/todolist.module').then(m => m.TodolistModule) },
  { path: '**',   redirectTo: '/todolist' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
