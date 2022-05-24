import { Injectable } from '@angular/core';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor() { }

  adduser(user:User)
  {
    let users:User[]
    if(localStorage.getItem('Users')){
      users=JSON.parse(localStorage.getItem('Users') || '{}');
     users=[user,...users]
    // for (const [k, v] of Object.entries(users)) {
    //   console.log(k, v);
    //   users=users.push[v]
    // }
    

    }
    else
    {
      users=[user];
    }
    localStorage.setItem('Users',JSON.stringify(user))
  }
}
