import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TodoService } from "../todo.service";
import { Todo } from "../models/todo";
import { TodoCreate } from "../models/todo-create";

@Component({
  selector: 'ngnest-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  host: {'class': 'flex-grow-1 flex-shrink-0 mb-auto'}
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  nowEditedId: string;

  constructor(
    private todoService : TodoService,
  ) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(t => this.todos = <Todo[]>t);
  }

  SetManageId(id: string) {
    this.nowEditedId = id;
  }

  GetItem(todo: Todo) {
    let i: number = this.todos.findIndex(_todo => _todo.id == todo.id);
    this.todoService.getTodo(todo.id)
      .subscribe(t => this.todos[i] = <Todo>t);
  }

  PostItem(todo: TodoCreate) {
    this.todoService.postTodo(todo)
      .subscribe(t => this.todos.push(<Todo>t));
  }

  PutItem(todo: Todo) {
    let i: number = this.todos.findIndex(_todo => _todo.id == todo.id);
    this.todoService.putTodo(todo.id, todo)
      .subscribe(t => this.todos[i] = <Todo>t);
  }

  DeleteItem(todo: Todo) {
    this.todoService.deleteTodo(todo.id)
      .subscribe(t => {
        this.todos = this.todos.filter(_t => _t !== t);
        this.ngOnInit();}
      );
  }
}