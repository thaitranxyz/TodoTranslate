import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Todo } from "./to-do-list.model";

@Injectable({ providedIn: "root" })
export class TodoService {
  private todos: Todo[] = [];
  private todosUpdated = new Subject<Todo[]>();

  getTodos() {
    return [...this.todos];
  }

  getTodoUpdateListener() {
    return this.todosUpdated.asObservable();
  }

  addTodo(content: string) {
    const todo: Todo = { content: content };
    this.todos.push(todo);
    this.todosUpdated.next([...this.todos]);
  }
}
