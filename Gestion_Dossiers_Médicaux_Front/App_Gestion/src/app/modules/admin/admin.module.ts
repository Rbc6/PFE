import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminRoutingModule } from './admin-routing.module'
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component'
import { NgZorroImportsModule } from '../../NgZorroImportsModule'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from '../Common/sidebar/sidebar.component';

import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';




@NgModule({
  declarations: [AdminDashboardComponent, SidebarComponent,AddUserComponent, UpdateUserComponent, ListUserComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgZorroImportsModule,
    ReactiveFormsModule,
    FormsModule,
   
  ]
})
export class AdminModule {}
