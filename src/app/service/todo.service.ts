import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from './../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];

  constructor() {
    // console.log(JSON.parse(localStorage.getItem('todos')))
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }

  getTodos() {
    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.clear();
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  updateTodo(todo: Todo) {
    this.todos.map(singleTodo => {
      if (singleTodo.id === todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
    localStorage.clear();
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.findIndex(currentObj => currentObj.id === todo.id);
    this.todos.splice(index, 1);
    localStorage.clear();
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
}
