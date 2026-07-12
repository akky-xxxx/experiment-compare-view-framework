import { addMonths } from "date-fns";
import { Component, computed, signal } from "@angular/core";
import { CalendarBody } from "./components/features/calendar-body/calendar-body";
import { getTaskList } from "./modules/getTaskList";

@Component({
  selector: "calendar",
  templateUrl: "./calendar.html",
  imports: [CalendarBody],
})
export class Calendar {
  private readonly today = signal(new Date());

  protected readonly taskList = getTaskList();
  protected readonly currentMonth = computed(() => this.today().getMonth() + 1);
  protected readonly currentYear = computed(() => this.today().getFullYear());

  protected readonly handleNextMonthClick = () => {
    this.today.update((current) => addMonths(current, 1));
  };

  protected readonly handlePreviousMonthClick = () => {
    this.today.update((current) => addMonths(current, -1));
  };
}
