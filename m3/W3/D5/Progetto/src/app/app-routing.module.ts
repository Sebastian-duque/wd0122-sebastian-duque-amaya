import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: 'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
},
{ path: '',
redirectTo: 'home',
pathMatch: 'full'
},
{ path: 'navbar',
 loadChildren: () => import('./navbar/navbar.module').then(m => m.NavbarModule)
},
{ path: 'info',
 loadChildren: () => import('./info/info.module').then(m => m.InfoModule)
},
{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
