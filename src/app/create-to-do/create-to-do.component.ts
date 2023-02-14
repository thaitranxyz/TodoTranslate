import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { TodoService } from "../todo.service";

@Component({
  selector: "app-create-to-do",
  templateUrl: "./create-to-do.component.html",
  styleUrls: ["./create-to-do.component.css"],
})
export class CreateToDoComponent {
  constructor(public todoService: TodoService) {}

  onAddTodo(form: NgForm) {
    if (form.invalid) return;

    const todo = { content: form.value.content };

    this.todoService.addTodo(form.value.content);

    form.resetForm();
  }
}
