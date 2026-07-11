import { Component, computed, input, TemplateRef } from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";
import { RouterLink } from "@angular/router";

import { formatScheduleDate } from "../../../../../../../../../utilities/formatScheduleDate";

const getCellColor = (isCurrentMonth: boolean) => {
  return isCurrentMonth ? 1 : 0.6;
};

@Component({
  selector: "calendar-cell",
  templateUrl: "./calendar-cell.html",
  styleUrls: ["./calendar-cell.css"],
  imports: [RouterLink, NgTemplateOutlet],
})
export class CalendarCell {
  public readonly date = input.required<Date>();
  public readonly isCurrentMonth = input.required<boolean>();
  public readonly taskListSlot = input.required<TemplateRef<unknown>>();

  protected cellColor = computed(() => ({
    "--opacity": getCellColor(this.isCurrentMonth()),
  }));
  protected currentDate = computed(() => this.date().getDate());
  protected queryParameters = computed(() => ({
    date: formatScheduleDate(this.date()),
  }));
}
