import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  routes = [
    { name: 'Home', route: '/home', icon: 'home', selected: true },
    { name: 'Latest', route: '/latest', icon: 'alarm_on', selected: false },
    { name: 'Lore', route: '/lore', icon: 'auto_stories', selected: false },
    { name: 'Roadmap', route: '/roadmap', icon: 'route', selected: false },
    { name: 'Rev Share', route: '/utilities', icon: 'attach_money', selected: false },
    { name: 'Partners', route: '/partners', icon: 'contact_mail', selected: false },
    { name: 'My Aliens', route: '/my-aliens', icon: 'wallet', selected: false}
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  routeClicked(selectedRoute: any) {
    this.routes.forEach(route => {
      route.selected = false;
      if (selectedRoute.name === route.name) {
        route.selected = true;
        this.router.navigate([route.route]);
      }
    })
  }
}

