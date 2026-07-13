import { computed, inject } from "@angular/core";

import { ApiClientService } from "../../../../../utilities/apiClient.service";
import { formatScheduleDate } from "../../../../../utilities/formatScheduleDate";

export const getTask = (taskId: () => string) => {
  const apiClient = inject(ApiClientService);
  const schedule = apiClient.getScheduleId(taskId);

  return computed(() => {
    const value = schedule.value();
    if (value === undefined) return undefined;

    const { body, date, id, title } = value;
    return { body, date: formatScheduleDate(new Date(date)), id, title };
  });
};
