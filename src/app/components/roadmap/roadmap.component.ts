import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {

  constructor(
    private navService: NavigationService
  ) { }

  ngOnInit(): void {
    this.navService.updatePageTitle('Roadmap');
  }

}
