import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos/todos.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from "./todo.service";


@NgModule({
  declarations: [TodosComponent, TodoAddComponent, TodoItemComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule
  ],
  providers: [TodoService]
})
export class TodosModule { }
