import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
LoginForm:FormGroup
isloged:boolean=false
  constructor(private fb:FormBuilder,private authservc:AuthService,private router: Router,public translate:TranslateService) { 
   this.LoginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
  })

  }

  ngOnInit(): void {
  }

  get email(){
    return this.LoginForm.controls['email'];
  }
  get password(){
    return this.LoginForm.controls['password']
  }
  saveForm(){
    console.log(this.LoginForm.value)
    const token=this.authservc.AuthUser(this.LoginForm.value)
    if(token)
    {
       localStorage.setItem('token',this.email.value)  
       this.router.navigate(['/shipment']);
      console.log("logged ")
     
    }
    else{
      alert("password & email are not vaild")
    }
  }
}
