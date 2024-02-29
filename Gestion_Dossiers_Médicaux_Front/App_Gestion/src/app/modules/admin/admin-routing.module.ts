import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component'
import { AuthGuard } from '../../auth/guards/auth.guard'
import { LoginComponent } from '../../auth/components/login/login.component'
import { LoginAuthGuard } from '../../auth/guards/login.guard'
import { UsersComponent } from './components/users/users.component'


const routes: Routes = [
  { path: 'login', component: LoginComponent ,canActivate: [LoginAuthGuard]},
  { path: 'dashboard', component: AdminDashboardComponent,canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
