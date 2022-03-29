import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>();
  constructor(
    public firebaseService: FirebaseService,
    private navService: NavigationService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.navService.updatePageTitle('Buy on OpenSea')
    this.firebaseService.user$.subscribe(result => {
      if (!result) {
        this.openLoginDialog();
      }
    })
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
    });
  }

  buyOnOpenSea(version: string) {
    if (version === 'v1') {
      window.open('https://opensea.io/collection/theplutoalliance', '_blank')?.focus();
    } else {
      window.open('https://opensea.io/collection/pluto2', '_blank')?.focus();
    }
  }

}
