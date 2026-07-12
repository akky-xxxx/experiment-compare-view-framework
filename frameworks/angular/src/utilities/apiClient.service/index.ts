import { HttpClient, httpResource } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

import type { ScheduleIdRequest } from "./types/ScheduleIdRequest";
import type { ScheduleIdResponse } from "./types/ScheduleIdResponse";
import type { SchedulesRequest } from "./types/SchedulesRequest";
import type { SchedulesResponse } from "./types/SchedulesResponse";

@Injectable({ providedIn: "root" })
export class ApiClientService {
  private readonly http = inject(HttpClient);

  public getSchedules() {
    return httpResource<SchedulesResponse>(() => "/schedules", {
      defaultValue: [],
    });
  }

  public getScheduleId(id: () => string | undefined) {
    return httpResource<ScheduleIdResponse | undefined>(() => {
      const value = id();
      return value === undefined ? undefined : `/schedules/${value}`;
    });
  }

  public postSchedules(requestBody: SchedulesRequest) {
    return this.http.post<ScheduleIdResponse>("/schedules", requestBody);
  }

  public putScheduleId(requestBody: ScheduleIdRequest) {
    return this.http.put<ScheduleIdResponse>(
      `/schedules/${requestBody.id}`,
      requestBody,
    );
  }
}
