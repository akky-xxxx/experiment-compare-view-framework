import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from "@angular/core";
import { provideRouter, withComponentInputBinding } from "@angular/router";

import { routes } from "./app.routes";

import { baseUrlInterceptor } from "../utilities/apiClient.service/interceptors/baseUrlInterceptor";
import { errorLoggingInterceptor } from "../utilities/apiClient.service/interceptors/errorLoggingInterceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([baseUrlInterceptor, errorLoggingInterceptor])),
    provideRouter(routes, withComponentInputBinding()),
  ],
};
