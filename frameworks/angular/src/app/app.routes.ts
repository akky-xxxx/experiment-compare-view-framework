import { Routes } from "@angular/router";
import { Top } from "../components/pages/top/top";
import { Calendar } from "../components/pages/calendar/calendar";
import { NotFound } from "../components/pages/not-found/not-found";

export const routes: Routes = [
  { path: "", component: Top },
  { path: "calendar", component: Calendar },
  { path: "**", component: NotFound },
];
