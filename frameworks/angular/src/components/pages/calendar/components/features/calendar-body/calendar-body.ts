import { Component, computed, input, output } from "@angular/core";
import { DayCell } from "./components/ui/day-cell/day-cell";
import { getDates } from "./modules/getDates";
import { getTargetTaskList } from "./modules/getTargetTaskList";
import { CalendarCell } from "./components/features/calendar-cell/calendar-cell";
import { TaskList } from "./components/features/task-list/task-list";
import { MonthSelector } from "./components/layouts/month-selector/month-selector";
import { SiblingMonthButton } from "./components/ui/sibling-month-button/sibling-month-button";

import type { Task } from "../../../../../../domains/Task";

@Component({
  selector: "calendar-body",
  templateUrl: "./calendar-body.html",
  styleUrls: ["./calendar-body.css"],
  imports: [DayCell, CalendarCell, MonthSelector, SiblingMonthButton, TaskList],
})
export class CalendarBody {
  public readonly currentMonth = input.required<number>();
  public readonly currentYear = input.required<number>();
  public readonly taskList = input.required<readonly Task[]>();
  public readonly handleNextMonthClick = output();
  public readonly handlePreviousMonthClick = output();
  protected readonly DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
  protected readonly dates = computed(() => getDates(this.currentYear(), this.currentMonth()));

  protected readonly getCellTaskList = (date: Date) =>
    this.taskList().reduce(getTargetTaskList(date), [] as Pick<Task, "id" | "title">[]);
}
