import { Component, OnInit, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'ngnest-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Input() nowEditedId: string;

  @Output() OnManage = new EventEmitter<string>();
  @Output() OnGet  = new EventEmitter<Todo>();
  @Output() OnPut  = new EventEmitter<Todo>();
  @Output() OnDelete  = new EventEmitter<Todo>();

  ifEdit: boolean;
  ifDelete: boolean;
  ifCancelable: boolean;
  _todo: Todo;
  
  constructor() { }

  ngOnInit(): void {
      this.ifEdit = false;
      this.ifDelete = false;
      this.ifCancelable = false;
      this._todo = {id: this.todo.id, name: this.todo.name, description: this.todo.description, isDone: this.todo.isDone};
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.todo.id != this.nowEditedId && this.ifCancelable == true)
      this.onCancel();
  }

  onEdit() {
    this.ifEdit = true;
    this.ifCancelable = true;
    this.OnManage.emit(this.todo.id);
  }
  onDelete() {
    this.ifDelete = true;
    this.ifCancelable = true;
    this.OnManage.emit(this.todo.id);
  }
  onCancel() {
    this.ifEdit = false;
    this.ifDelete = false;
    this.ifCancelable = false;
    this.OnGet.emit(this.todo);
    this._todo.name = this.todo.name;
    this._todo.description = this.todo.description;
    this._todo.isDone = this.todo.isDone;
  }

  onSubmit() {
    if(this.ifEdit)
    {
      this.ifEdit = false;
      this.ifCancelable = false;
      this.todo.name = this._todo.name;
      this.todo.description = this._todo.description;
      this.todo.isDone = this._todo.isDone;
      this.OnPut.emit(this.todo);
    }
    else if (this.ifDelete)
    {
      this.OnDelete.emit(this.todo);
    }
  }
}
