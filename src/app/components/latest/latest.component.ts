import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';


@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LatestComponent implements OnInit {

  tabs = [
    { tab: 'Pluto Alliance', screenName: 'Pluto_Alliance'},
    { tab: 'Justin', screenName: 'NFT_Justin' },
    { tab: 'Deezy', screenName: 'Deezy_BTC' },
    { tab: 'Ben', screenName: 'Bitboy_Crypto' },
    { tab: 'CryptoMayhem', screenName: 'CryptoMayhemYT' },
  ]

  constructor(
    private navService: NavigationService
  ) { }

  ngOnInit(): void {
    this.navService.updatePageTitle('Latest Pluto Alliance News')
  }

  onLoad(event: any) {
    console.log(event);
  }

}
