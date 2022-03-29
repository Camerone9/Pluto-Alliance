import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private navService: NavigationService
  ) { }

  ngOnInit(): void {
    this.navService.updatePageTitle('User Settings')
  }

}
