import { Node } from "../../types/Node"

export const SCHEDULES = {
  schedules: [
    {
      body: "This is a sample schedule.".repeat(10),
      date: new Date().toISOString(),
      id: "1",
      title: "Sample Schedule",
    },
  ],
} as const satisfies Node
