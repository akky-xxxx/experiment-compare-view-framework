import { Component, computed, input } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { TaskDetail } from "../../layouts/task-detail/task-detail";
import { getTaskForm } from "./modules/getTaskForm";

import type { Input } from "./modules/getTaskForm";

@Component({
  selector: "task-form",
  templateUrl: "./task-form.html",
  styleUrls: ["./task-form.css"],
  imports: [ReactiveFormsModule, TaskDetail],
})
export class TaskForm {
  public readonly mode = input.required<Input["mode"]>();
  public readonly id = input<string>();
  public readonly date = input<string>();

  protected readonly idNode = computed(() => (this.mode() === "edit" ? this.id() : undefined));
  protected readonly taskForm = getTaskForm(() => {
    const id = this.id();
    return this.mode() === "edit" && id !== undefined
      ? { mode: "edit", id }
      : { mode: "create", date: this.date() };
  });
}
