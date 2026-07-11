import { Component, computed, input } from "@angular/core";
import { DayCell } from "./components/ui/day-cell/day-cell";
import { getDates } from "./modules/getDates";
import { CalendarCell } from "./components/features/calendar-cell/calendar-cell";

@Component({
  selector: "calendar-body",
  templateUrl: "./calendar-body.html",
  styleUrls: ["./calendar-body.css"],
  imports: [DayCell, CalendarCell],
})
export class CalendarBody {
  public readonly currentMonth = input.required<number>();
  public readonly currentYear = input.required<number>();
  protected readonly DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
  protected readonly dates = computed(() => getDates(this.currentYear(), this.currentMonth()));
}
