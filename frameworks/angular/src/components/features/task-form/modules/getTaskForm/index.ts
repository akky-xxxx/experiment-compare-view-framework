import { computed, effect, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { ApiClientService } from "../../../../../utilities/apiClient.service";

export type Input = { mode: "create"; date?: string } | { mode: "edit"; id: string };

export const getTaskForm = (input: () => Input) => {
  const apiClient = inject(ApiClientService);
  const formBuilder = inject(NonNullableFormBuilder);
  const router = inject(Router);

  const form = formBuilder.group({
    body: formBuilder.control("", Validators.minLength(1)),
    date: formBuilder.control(""),
    title: formBuilder.control("", Validators.minLength(1)),
  });

  const editId = computed(() => {
    const current = input();
    return current.mode === "edit" ? current.id : undefined;
  });
  const schedule = apiClient.getScheduleId(editId);

  effect(() => {
    const current = input();

    if (current.mode === "edit") {
      const value = schedule.value();
      if (value !== undefined) form.patchValue(value);
      return;
    }

    if (current.date !== undefined) {
      form.patchValue({ date: current.date });
    }
  });

  const status = toSignal(form.statusChanges, { initialValue: form.status });
  const isEnabledSubmit = computed(() => form.dirty && status() === "VALID");

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    if (form.invalid) return;

    const value = form.getRawValue();
    const current = input();
    const request =
      current.mode === "edit"
        ? apiClient.putScheduleId({ ...value, id: current.id })
        : apiClient.postSchedules(value);

    request.subscribe(() => {
      router.navigate(["/calendar"]);
    });
  };

  return { form, isEnabledSubmit, onSubmit };
};
