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
    },
    {
      path: 'customers',
      loadChildren: () =>
      import('./core/components/customers/customers.module').then((m) => m.CustomersModule  )
    },
    {
      path: 'profile',
      loadChildren: () =>
      import('./core/components/profile/profile.module').then((m) => m.ProfileModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
