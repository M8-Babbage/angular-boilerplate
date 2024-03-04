import { Routes } from '@angular/router'

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/views.routes').then((m) => m.VIEWS_ROUTES)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
]
