import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    public firebaseService: FirebaseService
  ) { }

  ngOnInit(): void {
  }

  signUp() {
    const email = this.signUpForm.get("email")!.value;
    const password = this.signUpForm.get("password")!.value;

    this.firebaseService.signUp(email, password);
  }

}
