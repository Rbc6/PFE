import { Injectable } from '@angular/core'

const PREFIX_TOKEN_KEY = 'gestion'

const TOKEN = `${PREFIX_TOKEN_KEY}.token`
const USER = `${PREFIX_TOKEN_KEY}.user`
const ROLE =`${PREFIX_TOKEN_KEY}.role`

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  static saveToken(token: string) {
    localStorage.removeItem(TOKEN)
    localStorage.setItem(TOKEN, token)
  }

  static saveUser(user: any) {
    localStorage.removeItem(USER)
    localStorage.setItem(USER, JSON.stringify(user))
  }
  static saveRole(role:any){
    localStorage.removeItem(ROLE)
    localStorage.setItem(ROLE, JSON.stringify(role))
  }

  static getToken(): string | null {
    return localStorage.getItem(TOKEN)
  }

  static getUser(): any {
    return JSON.parse(localStorage.getItem(USER) || '{}')
  }

  static getUserRole(): any {
    const user = this.getUser()

    if (user == null) return ''

    return user.role
  }

  static isAdminLoggedIn(): boolean {
    if (this.getToken() == null) return false

    return this.getUserRole() === 0
  }
  static isMedecinLoggedIn(): boolean {
    if (this.getToken() == null) return false
    return this.getUserRole() === 1
  }
  

 
  static logout() {
    localStorage.removeItem(TOKEN)
    localStorage.removeItem(USER)
  }
}
