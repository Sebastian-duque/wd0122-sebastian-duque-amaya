import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrlRegister: string = 'http://localhost:4201/register';

  constructor(private http: HttpClient) { }

  registerUser(user: User){
    return this.http.post(this.apiUrlRegister, user)
  }

  getUser(){
    return JSON.parse(localStorage.getItem('user')!)
  }
}
