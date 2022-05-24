import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
user={}as User
userloggedname:string=""
currentlang:string=""
  constructor(public translate:TranslateService) { 
    this.currentlang=localStorage.getItem('currentlang')||'en'
    this.translate.use(this.currentlang)
  }

  ngOnInit(): void {
  }


  islogged(){
   this.user=JSON.parse(localStorage.getItem('Users') || '{}')
   this.userloggedname=this.user.username
    return localStorage.getItem('token')
  }
  logout(){
    localStorage.removeItem('token')
  }
  changecurrentlang(lang:string){
    this.translate.use(lang)
    localStorage.setItem('currentlang',lang)
  }
}
