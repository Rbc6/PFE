import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AdminService } from '../../services/admin.service'
import { NzMessageService } from 'ng-zorro-antd/message'
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
AddUserForm ! : FormGroup
isSpinning : boolean = false 
roles !: any[]
role : any

constructor(
  private fb : FormBuilder,
  private adminService : AdminService,
  private message: NzMessageService,
  private router: Router
  ){}

  ngOnInit(){

    this.adminService.getRoles().subscribe(roles =>{
      this.roles =  roles ;
      console.log("roles",this.roles )
    })
    console.log(this.roles)
    this.AddUserForm = this.fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      tel: [null, Validators.required],
      role: [null, Validators.required]
    })
    
  }

  AddUser(){
    this.isSpinning = true

    const formData: FormData = new FormData()
    
    formData.append('firstname', this.AddUserForm.value.firstname)
    formData.append('lastname', this.AddUserForm.value.lastname)
    formData.append('email', this.AddUserForm.value.email)
    formData.append('password', this.AddUserForm.value.password)
    formData.append('tel', this.AddUserForm.value.tel)
    formData.append('role', this.AddUserForm.value.role)
    
    console.log("this.AddUserForm.value.role:",this.AddUserForm.value.role)
    console.log("value:",this.AddUserForm.value)
    this.adminService.addUser(formData).subscribe(
      res => {
        console.log(formData)
        this.message.success('User Added successfully', { nzDuration: 3000 })
        this.isSpinning = false
        this.router.navigateByUrl('/admin/dashboard')
      },
      error => {
        this.message.error('Error Adding User', { nzDuration: 3000 })
        console.log(error)
      }
    )
  }

}
