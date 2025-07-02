import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {

  // Reactive form for login
  // Note: Ensure you have imported ReactiveFormsModule in your module

  loginForm: FormGroup = new FormGroup({
    EmailId: new FormControl(""),
    Password: new FormControl("")
  });

  http = inject(HttpClient);
  // router = inject(Router);


  onLogin() {
    // debugger;
    const formValue = this.loginForm.value;
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", formValue).subscribe({
      next: (response: any) => {
        // debugger;
        if (response.result) {
          alert("Login Successful");
          // this.router.navigateByUrl('/dashboard');
        } else {
          alert(response.message);
        }
      },
      error: (error) => {
        // debugger;
        alert(error.error)
      }
    })
  }
}
