import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(private router: Router) {}
  navigateToUserComponent() {
    
    this.router.navigate(['/users']); 
    console.log("routing")
  }
   
}
