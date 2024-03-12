import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './auth/components/login/login.component'
import { AddUserComponent } from './modules/admin/components/add-user/add-user.component';
import { ListUserComponent } from './modules/admin/components/list-user/list-user.component';
import { UpdateUserComponent } from './modules/admin/components/update-user/update-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  {path : 'admin/user/:id', component : UpdateUserComponent}
 

  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
