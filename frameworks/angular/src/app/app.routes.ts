import { Routes } from "@angular/router";
import { Top } from "../components/pages/top/top";
import { Calendar } from "../components/pages/calendar/calendar";
import { TaskCreate } from "../components/pages/task-create/task-create";
import { TaskId } from "../components/pages/task-id/task-id";
import { NotFound } from "../components/pages/not-found/not-found";

export const routes: Routes = [
  { path: "", component: Top },
  { path: "calendar", component: Calendar },
  { path: "task/create", component: TaskCreate },
  { path: "task/:taskId", component: TaskId },
  { path: "**", component: NotFound },
];
