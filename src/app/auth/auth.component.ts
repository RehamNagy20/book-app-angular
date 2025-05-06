import { Component, OnInit } from "@angular/core";
import { Form, NgForm, Validators } from '@angular/forms';
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { FormGroup,FormControl } from "@angular/forms";
@Component({
    selector: "app-auth",
    standalone: false,
    templateUrl: "./auth.component.html",
    styleUrl: "./auth.component.css",
})
export class AuthComponent implements OnInit{
    isLoginMode = true;
    signUpForm!:FormGroup;
    constructor(private authService:AuthService,private router:Router){}
    
    ngOnInit(){
      this.signUpForm=new FormGroup({
        'email':new FormControl(null,[Validators.required,Validators.email]),
        'password':new FormControl(null,[Validators.required,Validators.minLength(6)])
      });
    }

    onSwitch() {
      this.isLoginMode = !this.isLoginMode;
    }
    onSubmit(){
      const email = this.signUpForm.value.email;
      const password = this.signUpForm.value.password;
      if(this.isLoginMode){
        this.authService.signIn(email,password);
        this.router.navigate(['']);
      }else{
          this.authService.signUp(email,password);
          this.router.navigate(['']);
      }
      this.signUpForm.reset();
    }
}