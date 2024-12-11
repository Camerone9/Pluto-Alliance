import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-right-buttons',
  templateUrl: './right-buttons.component.html',
  styleUrls: ['./right-buttons.component.scss']
})
export class RightButtonsComponent implements OnInit {

  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  logoutPop() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
    });
  }

  openTwitter() {
    window.open('https://twitter.com/Pluto_Alliance', '_blank')?.focus();
  }

  openDiscord() {
    window.open('https://discord.gg/2aDRPuMBzG', '_blank')?.focus();
  }
}
