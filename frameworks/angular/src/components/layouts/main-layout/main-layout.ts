import { Component, TemplateRef, input } from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";

@Component({
  selector: "main-layout",
  imports: [NgTemplateOutlet],
  templateUrl: "./main-layout.html",
  styleUrls: ["./main-layout.css"],
})
export class MainLayout {
  headerSlot = input.required<TemplateRef<unknown>>();
}
