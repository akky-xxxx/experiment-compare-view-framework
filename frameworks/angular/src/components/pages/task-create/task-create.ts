import { Component, input } from "@angular/core";

import { TaskForm } from "../../features/task-form/task-form";

@Component({
  selector: "task-create",
  templateUrl: "./task-create.html",
  imports: [TaskForm],
})
export class TaskCreate {
  public readonly date = input<string>();
}
