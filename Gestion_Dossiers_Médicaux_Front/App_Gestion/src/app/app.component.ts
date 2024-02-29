import { Component } from '@angular/core'
import { StorageService } from './auth/components/services/storage/storage.service'
import { NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Gestion_medicale'

 
  isAdminLoggedIn: boolean = StorageService.isAdminLoggedIn()
 
  displayContent: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.displayContent = event.url === '/';
      }
    });
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event.constructor.name === 'NavigationEnd') {
        
        this.isAdminLoggedIn = StorageService.isAdminLoggedIn()
      }
    })
  }
  



  logout() {
    StorageService.logout()
    this.router.navigateByUrl('/login')
  }
}
