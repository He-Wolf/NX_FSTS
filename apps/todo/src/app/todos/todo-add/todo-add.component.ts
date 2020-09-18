import { Component, OnInit, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'ngnest-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  @Input() nowEditedId: string;

  @Output() OnManage = new EventEmitter<string>();
  @Output() OnPost  = new EventEmitter<Todo>();
  
  ifAddItem: boolean;
  todo: Todo;

  constructor() { }

  ngOnInit(): void {
    this.ifAddItem = false;
    this.todo = {id: "-1", name: "", description: "", isDone: false}
  }

  ngOnChanges(changes: SimpleChanges) {
      if(this.todo != undefined && this.todo.id != this.nowEditedId)
          this.Cancel();
  }
  AddItem()
  {
      this.ifAddItem = true;
      this.OnManage.emit(this.todo.id);
  }
  onAdd()
  {
      this.OnPost.emit(this.todo);
      this.Cancel();
  }
  Cancel(): void
  {
      this.ifAddItem = false;
      this.todo.id = "-1";
      this.todo.name = "";
      this.todo.description = "";
      this.todo.isDone = false;
  }
}
