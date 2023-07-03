import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent implements OnInit {
  public loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  })

  constructor(private fb: FormBuilder, private router: Router,) { }

  ngOnInit(): void {
  }

  isInvalid(field: string): boolean {
    return  this.loginForm.controls[field].touched && this.loginForm.controls[field].invalid; // tocado e invalido
  }

  isValid(field: string) {
    return  this.loginForm.controls[field].touched && this.loginForm.controls[field].valid; // tocado y valido
  }

  login(): void {
    if (this.loginForm.invalid) {
      console.log('invalido form');
      this.loginForm.markAllAsTouched();
      return;
    } 

    this.router.navigateByUrl('/home');

    console.log('valido form');
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }
}
