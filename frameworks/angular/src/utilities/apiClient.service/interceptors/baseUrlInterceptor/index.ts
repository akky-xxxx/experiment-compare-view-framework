import type { HttpInterceptorFn } from "@angular/common/http";

const BASE_URL = "http://localhost:4000";

export const baseUrlInterceptor: HttpInterceptorFn = (request, next) => {
  return next(request.clone({ url: `${BASE_URL}${request.url}` }));
};
