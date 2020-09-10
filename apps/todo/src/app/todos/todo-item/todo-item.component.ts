import { Component, OnInit,EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
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

  ifEdit: boolean = false;
  ifDelete: boolean = false;
  ifCancelable: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("onchange todo: ");
    console.log(this.todo);
    
    console.log("onchange nowEditedId: " + this.nowEditedId);
    console.log("onchange ifEdit: " + this.ifEdit);
    console.log("onchange ifDelete: " + this.ifDelete);
    console.log("onchange ifCancelable: " + this.ifCancelable);
    if(this.todo.id != this.nowEditedId && this.ifCancelable == true){
            this.onCancel();
            console.log("onchange cancel");
    }
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
  }

  onSubmit() {
    if(this.ifEdit)
    {
      this.ifEdit = false;
      this.ifCancelable = false;
      this.OnPut.emit(this.todo);
    }
    else if (this.ifDelete)
    {
      this.OnDelete.emit(this.todo);
    }
  }
}
