import { Component, input } from "@angular/core";

@Component({
  selector: "task-detail",
  templateUrl: "./task-detail.html",
  styleUrls: ["./task-detail.css"],
})
export class TaskDetail {
  public readonly id = input<string>();
}
