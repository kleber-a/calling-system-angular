import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./core/components/auth/auth.module').then((m) => m.AuthModule),
  },
  {
     path: 'dashboard', 
     loadChildren: () =>
      import('./core/components/dashboard/dashboard.module').then((m) => m.DashboardModule  )
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
