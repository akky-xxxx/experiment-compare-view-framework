import { Component, computed, input, output } from "@angular/core";

const getDirectionIcon = (direction: "previous" | "next") => {
  return direction === "previous" ? "◀" : "▶";
};

@Component({
  selector: "sibling-month-button",
  templateUrl: "./sibling-month-button.html",
})
export class SiblingMonthButton {
  public readonly direction = input.required<"previous" | "next">();
  public readonly handleClick = output();

  protected readonly icon = computed(() => getDirectionIcon(this.direction()));
}
