import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from "./todo";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'any'
})
export class TodoService {

  private API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getTodos() : Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.API_URL}/api/todo`);
  }

  getTodo(id: string) : Observable<Todo> {
    return this.http.get<Todo>(`${this.API_URL}/api/todo/${id}`);
  }

  postTodo(todo: Todo) : Observable<Todo> {
    return this.http.post<Todo>(`${this.API_URL}/api/todo`, todo);
  }

  putTodo(id: string, todo: Todo) : Observable<Todo> {
    return this.http.put<Todo>(`${this.API_URL}/api/todo/${id}`, todo);
  }

  deleteTodo(id: string) : Observable<Todo> {
    return this.http.delete<Todo>(`${this.API_URL}/api/todo/${id}`);
  }
}
