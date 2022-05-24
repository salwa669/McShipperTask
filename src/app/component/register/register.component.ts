import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { passwordMatchValidator } from 'src/app/CustomVaildtors/passwordMatchValidator';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterationForm:FormGroup
  user={} as User
  submiteduser:boolean=false;
  constructor(private fb:FormBuilder,private UserServe:UserService,private route:Router,public translate:TranslateService) {
   this.RegisterationForm=this.fb.group({
      username:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
      confirmpassword:['',Validators.required]
   }, { validators: passwordMatchValidator })

  }


  ngOnInit(): void {
  }
  get username()
  {
    return this.RegisterationForm.controls['username']
  }
  get email()
  {
    return this.RegisterationForm.controls['email']
  }
  get password()
  {
    return this.RegisterationForm.controls['password']
  }
  get confirmpassword()
  {
    return this.RegisterationForm.controls['confirmpassword']
  }
  saveForm(){
    console.log(this.RegisterationForm.value)
  
     
      localStorage.setItem('Users',JSON.stringify(this.userdata()))
      this.RegisterationForm.reset();
      this.route.navigate(['/login']);
    
    
  }

  userdata():User{
    return this.user={
      username:this.username.value,
      email:this.email.value,
      password:this.password.value
    }
  }
 

}
