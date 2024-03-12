import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service'
import { ActivatedRoute, Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { NzMessageService } from 'ng-zorro-antd/message'

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent {
  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router
  ) {}

  isSpinning: boolean = false
  userId: number = this.activatedRoute.snapshot.params['id']
  updateForm!: FormGroup 
  roles !: any[]

  ngOnInit(){

    this.adminService.getRoles().subscribe(roles =>{
      this.roles =roles ;
    })
    console.log(this.roles)
    this.updateForm = this.fb.group({
      fname: [null, Validators.required],
      lname: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      tel: [null, Validators.required],
      role: [null, Validators.required]
    })
    this.getUserById()
    
  }
  getUserById() {
    this.isSpinning = true

    this.adminService.getUserById(this.userId).subscribe(res => {
      this.isSpinning = false

      const userDto = res
      
      this.updateForm.patchValue(userDto)
    })
  }

  updateUser(){
    this.isSpinning = true

    const formData: FormData = new FormData()
    formData.append('firstname', this.updateForm.value.fname)
    formData.append('lastname', this.updateForm.value.lname)
    formData.append('email', this.updateForm.value.email)
    formData.append('password', this.updateForm.value.password)
    formData.append('tel', this.updateForm.value.tel)
    formData.append('role', this.updateForm.value.role)

    this.adminService.updateUser(this.userId, formData).subscribe(
      res => {
        this.message.success('user updated successfully', { nzDuration: 3000 })
        this.isSpinning = false
        this.router.navigateByUrl('/admin/dashboard')
      },
      error => {
        this.message.error('Error updating user', { nzDuration: 3000 })
        console.log(error)
      }
    )
  }
}
