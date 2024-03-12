import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../../../auth/components/login/login.component';
import { MedecinDashboardComponent } from '../../medecin-dashboard/medecin-dashboard.component';
import { LoginAuthGuard } from '../../../../auth/guards/login.guard';
import { AuthGuard } from '../../../../auth/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent ,canActivate: [LoginAuthGuard]},
{ path: 'dashboard', component: MedecinDashboardComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedecinRoutingModule { }
