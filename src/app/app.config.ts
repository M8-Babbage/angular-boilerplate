import { ApplicationConfig } from '@angular/core'
import { provideRouter, withComponentInputBinding } from '@angular/router'

import { provideHttpClient, withFetch } from '@angular/common/http'
import { ROUTES } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(ROUTES, withComponentInputBinding()), provideHttpClient(withFetch())]
}
