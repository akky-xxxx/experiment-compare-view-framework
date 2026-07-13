import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";

import { TaskDetail } from "../../layouts/task-detail/task-detail";
import { getTask } from "./modules/getTask";

@Component({
  selector: "task-id",
  templateUrl: "./task-id.html",
  styleUrls: ["./task-id.css"],
  imports: [RouterLink, TaskDetail],
})
export class TaskId {
  public readonly taskId = input.required<string>();

  protected readonly task = getTask(() => this.taskId());
}
