import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Todo } from "../to-do-list.model";
import { TodoService } from "../todo.service";

@Component({
  selector: "app-to-do-list",
  templateUrl: "./to-do-list.component.html",
  styleUrls: ["./to-do-list.component.css"],
})
export class ToDoListComponent implements OnInit {
  constructor(public todoService: TodoService) {}

  todos: Todo[] = [];
  private todosSub: Subscription;

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    this.todosSub = this.todoService
      .getTodoUpdateListener()
      .subscribe((todos) => {
        console.log(todos);
        this.todos = todos;
      });
  }

  ngOnDestroy() {
    this.todosSub.unsubscribe();
  }
}
