import { computed, inject } from "@angular/core";

import { ApiClientService } from "../../../../../utilities/apiClient.service";
import { formatScheduleDate } from "../../../../../utilities/formatScheduleDate";

export const getTaskList = () => {
  const apiClient = inject(ApiClientService);
  const schedules = apiClient.getSchedules();

  return computed(() =>
    schedules.value().map((schedule) => {
      const { id, date, title } = schedule;

      return {
        id,
        date: formatScheduleDate(new Date(date)),
        title,
      };
    }),
  );
};
