import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  title = '';

  constructor(
    private navService: NavigationService
  ) { }

  ngOnInit(): void {
    this.navService.pageTitle$.subscribe(result => {
      this.title = result;
    })
  }

}
