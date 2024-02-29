import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminRoutingModule } from './admin-routing.module'
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component'
import { NgZorroImportsModule } from '../../NgZorroImportsModule'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/admin-dashboard/sidebar/sidebar.component';
import { UsersComponent } from './components/users/users.component';




@NgModule({
  declarations: [AdminDashboardComponent, SidebarComponent, UsersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgZorroImportsModule,
    ReactiveFormsModule,
    FormsModule,
   
  ]
})
export class AdminModule {}
