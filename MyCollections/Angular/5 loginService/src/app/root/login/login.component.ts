import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm :FormGroup;
  wrongCred= false;

  constructor(private auth:AuthService, private router:Router, private formbuilder:FormBuilder) {
    this.loginForm = this.formbuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {
    this.auth.autoLogIn();
  }

  login(): void {
    if(this.loginForm.valid){
      var log = this.auth.login(this.loginForm.value.username, this.loginForm.value.password)
      if(log){
       this.router.navigateByUrl("home");
      }else{
        this.wrongCred = true;
      }
    }
   }

}
