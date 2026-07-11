import { Component } from "@angular/core";
import { DayCell } from "./components/ui/day-cell/day-cell";

@Component({
  selector: "calendar-body",
  templateUrl: "./calendar-body.html",
  styleUrls: ["./calendar-body.css"],
  imports: [DayCell],
})
export class CalendarBody {
  protected readonly DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
}
