import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UtilitiesComponent implements OnInit {

  constructor(
    private navService: NavigationService
  ) { }

  ngOnInit(): void {
    this.navService.updatePageTitle('Pluto Alliance Utilities')
  }

}
