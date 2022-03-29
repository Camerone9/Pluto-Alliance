import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    public firebaseService: FirebaseService,
    private navService: NavigationService,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    
  }

  loginGoogle() {
    this.firebaseService.googleSignin();
    this.dialogRef.close();
  }

  loginFacebook() {
    this.firebaseService.facebookSignin();
    this.dialogRef.close();
  }

  logout() {
    this.firebaseService.logout();
    this.dialogRef.close();
  }
}
