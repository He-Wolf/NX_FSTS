import { Component, OnInit } from '@angular/core';
import { TodoService } from "../todo.service";
import { Todo } from "../todo";

@Component({
  selector: 'ngnest-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(
    private todoService : TodoService,
  ) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
        .subscribe(todos => this.todos = todos);
  }
}