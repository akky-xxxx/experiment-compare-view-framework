import { catchError, throwError } from "rxjs";

import type { HttpInterceptorFn } from "@angular/common/http";

export const errorLoggingInterceptor: HttpInterceptorFn = (request, next) => {
  return next(request).pipe(
    catchError((error: unknown) => {
      console.error(error);
      return throwError(() => error);
    }),
  );
};
