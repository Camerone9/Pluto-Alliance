import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  constructor(
    private navService: NavigationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.navService.updatePageTitle('Pluto Alliance Partnerships');
  }

  routeToWebPage(page: string) {
    window.open(page, '_blank')?.focus();
  }
}
