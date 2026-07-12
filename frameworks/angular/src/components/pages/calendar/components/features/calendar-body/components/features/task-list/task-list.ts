import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";

import type { Task } from "../../../../../../../../../domains/Task";

@Component({
  selector: "task-list",
  templateUrl: "./task-list.html",
  styleUrls: ["./task-list.css"],
  imports: [RouterLink],
})
export class TaskList {
  public readonly taskList = input.required<readonly Pick<Task, "id" | "title">[]>();
}
