import { Injectable } from '@angular/core';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  AuthUser(user:any){
    let userslist={}as User
    if(localStorage.getItem('Users'))
    {
      userslist=JSON.parse(localStorage.getItem('Users')||'{}')
    }
    // return userslist.find(p => p.username===user.username && p.password===user.password)
    return userslist.email===user.email && userslist.password===user.password
  }
}
