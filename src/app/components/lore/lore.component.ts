import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-lore',
  templateUrl: './lore.component.html',
  styleUrls: ['./lore.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoreComponent implements OnInit {

  constructor(
    private navService: NavigationService
  ) { }

  ngOnInit(): void {
    this.navService.updatePageTitle('Pluto Alliance Lore')
  }

}
