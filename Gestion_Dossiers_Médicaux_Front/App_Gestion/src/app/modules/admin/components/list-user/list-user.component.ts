import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent {
  users : any[] = []

  constructor(
    private adminService : AdminService,
    private message : NzMessageService
  
  ) {}

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers() {
    this.adminService.getAllUsers().subscribe(res => {
      res.forEach((user: any) => {
        this.users.push(user)
      })
    })
  }
  
  deleteUser(id: number) {
    this.adminService.deleteUser(id).subscribe(res => {
      this.users = this.users.filter(user => user.id !== id)

      this.message.success('user deleted successfully', { nzDuration: 3000 })
    })
  }

}
