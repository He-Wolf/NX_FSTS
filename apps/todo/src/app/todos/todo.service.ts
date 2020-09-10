import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { ITodoDto, ITodoCreate } from "@ngnest/api-interfaces";
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'any'
})
export class TodoService {

  private API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getTodos() : Observable<ITodoDto[]> {
    return this.http.get<ITodoDto[]>(`${this.API_URL}/api/todo`)
      .pipe(first());
  }

  getTodo(id: string) : Observable<ITodoDto> {
    return this.http.get<ITodoDto>(`${this.API_URL}/api/todo/${id}`)
      .pipe(first());
  }

  postTodo(todo: ITodoCreate) : Observable<ITodoDto> {
    return this.http.post<ITodoDto>(`${this.API_URL}/api/todo`, todo)
      .pipe(first());
  }

  putTodo(id: string, todo: ITodoCreate) : Observable<ITodoDto> {
    return this.http.put<ITodoDto>(`${this.API_URL}/api/todo/${id}`, todo)
      .pipe(first());
  }

  deleteTodo(id: string) : Observable<ITodoDto> {
    return this.http.delete<ITodoDto>(`${this.API_URL}/api/todo/${id}`)
      .pipe(first());
  }
}
