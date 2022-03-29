import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { LoginComponent } from './components/login/login.component';
import { PaV1Component } from './components/pa-v1/pa-v1.component';
import { FirebaseService } from './services/firebase.service';
import { MetaMaskService } from './services/meta-mask.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'PlutoAlliance';
  isSignedIn = false;
  isMetaMask = false;
  require: any;
  isMobile: boolean;
  observerSubscription: Subscription;
  constructor(
    public firebaseService: FirebaseService,
    public breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private metaMaskService: MetaMaskService,
    ) {
    this.observerSubscription = breakpointObserver.observe([Breakpoints.Web]).subscribe(result => {
      this.isMobile = !result.matches;
    })
  }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }
  }

  async onSignUp(email: string, password: string) {
    await this.firebaseService.signUp(email, password);
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true;
    }
  }

  async onSignIn(email: string, password: string) {
    await this.firebaseService.signIn(email, password);
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true;
    }
  }

  handleLogout() {
    this.isSignedIn = false;
  }

  logoutPop() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
    });
  }

  close(reason: string) {
    this.sidenav.close();
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
    this.close('nav');
  }

  metaMask() {
    this.sidenav.close();
    let dialogRef = this.dialog.open(PaV1Component, {
      panelClass: 'custom-dialog-container',
      height: '80vh',
      width: '80vw',
    });
  }

  openTwitter() {
    window.open('https://twitter.com/Pluto_Alliance', '_blank')?.focus();
  }

  openDiscord() {
    window.open('https://discord.com/invite/HVerHujDVc', '_blank')?.focus();
  }

  openYoutube() {
    window.open('https://youtube.com/channel/UCpvkLSkVkL08J1__6qfzuLg', '_blank')?.focus();
  }
}
