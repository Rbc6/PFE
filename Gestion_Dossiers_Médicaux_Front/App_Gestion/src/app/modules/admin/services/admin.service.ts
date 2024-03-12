import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { StorageService } from '../../../auth/components/services/storage/storage.service'

const BASIC_URL = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {}

  addUser(userDto : any) : Observable<any> {
    return this.http.post(`${BASIC_URL}/api/admin/user`,userDto,{
      headers : this.createAuthorizationHeader()
    })
  }

  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(`${BASIC_URL}/api/admin/role`,{
      headers : this.createAuthorizationHeader()
    });
  }


  getAllUsers(): Observable<any> {
    return this.http.get(`${BASIC_URL}/api/admin/users`, {
      headers: this.createAuthorizationHeader()
    })
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${BASIC_URL}/api/admin/user/${id}`, {
      headers: this.createAuthorizationHeader()
    })
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${BASIC_URL}/api/admin/user/${id}`, {
      headers: this.createAuthorizationHeader()
    })
  }
  

  updateUser(id: number, userDto: any): Observable<any> {
    return this.http.put(`${BASIC_URL}/api/admin/user/${id}`, userDto, {
      headers: this.createAuthorizationHeader()
    })
  }

  private createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders()

    return authHeaders.set(
      'Authorization',
      `Bearer ${StorageService.getToken()}`
    )
  }
}
