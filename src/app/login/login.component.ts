import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
  							private auth : AuthService,
                private router: Router) { }

  ngOnInit() { 
    this.buildForm();
  }

  buildForm() {
      this.loginForm = this.formBuilder.group({
          email:      ['', [ Validators.required ]],
          password:   ['', [ Validators.required ]]
      });
  }

  submit() {
    this.auth.login(this.loginForm.value)
      .subscribe((status: boolean) => {
          if (status) {
            this.router.navigate(['/customer']);
          } else {
              
          }
      },
      (err: any) => console.log(err));
  }

}
