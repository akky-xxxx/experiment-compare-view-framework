import { Component, input } from "@angular/core";

@Component({
  selector: "day-cell",
  templateUrl: "./day-cell.html",
  styleUrls: ["./day-cell.css"],
})
export class DayCell {
  public readonly day = input.required<string>();
}
