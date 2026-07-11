import { Component } from "@angular/core";
import { CalendarBody } from "./components/features/calendar-body/calendar-body";

@Component({
  selector: "calendar",
  templateUrl: "./calendar.html",
  imports: [CalendarBody],
})
export class Calendar {}
