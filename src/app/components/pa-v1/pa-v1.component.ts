import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MetaMaskService } from 'src/app/services/meta-mask.service';
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import { nft } from 'src/app/models/nft.model';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-pa-v1',
  templateUrl: './pa-v1.component.html',
  styleUrls: ['./pa-v1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PaV1Component implements OnInit {

  connected = false;
  connecting = false;
  walletAddress: string;
  displayWalletAddress: string;
  isNftSelected = false;
  selectedNft: nft;
  v1Nfts: string[];
  v2Nfts: nft[];

  constructor(
    private metaMaskService: MetaMaskService,
    private navService: NavigationService
  ) { }

  ngOnInit(): void {
    this.navService.updatePageTitle('Connect Through MetaMask');

    this.metaMaskService.metaMaskConnected$.subscribe(result => {
      if (result) {
        this.connecting = false;
      }
      this.connected = result;
    });

    this.metaMaskService.v1NftIdArray$.subscribe(result => {
      this.v1Nfts = result;
    });

    this.metaMaskService.v2NftIdArray$.subscribe(result => {
      this.v2Nfts = result;
    });

    this.metaMaskService.walletAddress$.subscribe(result => {
      console.log(result);
      if (result !== '') {
        this.walletAddress = result;
        this.displayWalletAddress = this.walletAddress.substring(0, 4) + '....' + this.walletAddress.slice(this.walletAddress.length - 4);
        console.log(this.displayWalletAddress);
      } else {
        this.displayWalletAddress = 'Connect'
      }
    })
  }

  metaMaskClick() {
    if (!this.connected) {
      this.connecting = true;
      this.metaMaskService.signInWithMetaMask();
    }
  }

  getSrcUrl(id: string) {
    this.isNftSelected = true;
    const storage = getStorage();
    const imageRef = ref(storage, `v1_thumbnails/${id}.png`);
    getDownloadURL(imageRef).then((url) => {
      console.log(url);
      this.selectedNft = new nft(id, url);
    }).catch((err: any) => {
      console.log(err);
      this.selectedNft = new nft(id, '/assets/missing_alien.jpg');
    })
  }

  getV2Nft(nf: nft) {
    console.log(nf);
    this.isNftSelected = true;
    this.selectedNft = new nft(nf.id, '/assets/missing_alien.jpg');
  }

  goBack() {
    this.isNftSelected = false;
  }

}
