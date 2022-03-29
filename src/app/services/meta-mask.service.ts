import { Injectable } from '@angular/core';
import { BehaviorSubject, from, switchMap } from 'rxjs';
import detectEthereumProvider from '@metamask/detect-provider';
import { HttpClient } from '@angular/common/http';
import Moralis from 'moralis';
import { nft } from '../models/nft.model';


@Injectable({
  providedIn: 'root'
})
export class MetaMaskService {

  private metaMaskConnectedSubject = new BehaviorSubject<boolean>(false);
  public metaMaskConnected$ = this.metaMaskConnectedSubject.asObservable();

  private v1NftIdArraySubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public v1NftIdArray$ = this.v1NftIdArraySubject.asObservable();

  private v2NftIdArraySubject: BehaviorSubject<nft[]> = new BehaviorSubject<nft[]>([]);
  public v2NftIdArray$ = this.v2NftIdArraySubject.asObservable();

  private walletAddressSubject = new BehaviorSubject<string>('');
  public walletAddress$ = this.walletAddressSubject.asObservable();

  constructor(
    public http: HttpClient
  ) { }

  public signInWithMetaMask() {
    const serverUrl = "https://hb0xn7gm38ob.usemoralis.com:2053/server";
    const appId = "iVXTGUJquzaDwdkjlX4LRIxEmJZlbW3JOVaweaIf";
    Moralis.start({ serverUrl, appId });
    let v1Ids = new Array<string>();
    let v2Ids = new Array<nft>();
    Moralis.authenticate({signingMessage:"Signing to View my Pluto Alliance NFTs"}).then((user) =>{
      this.walletAddressSubject.next(user.get('ethAddress'));
      const nfts = Moralis.Web3API.account.getNFTs({ chain: 'eth', address: user.get('ethAddress')});
      nfts.then(nfts => {
        console.log(nfts);
        nfts.result?.forEach(nf => {
          if (nf.token_address === '0xdfe3ac769b2d8e382cb86143e0b0b497e1ed5447') {
            v1Ids.push(nf.token_id);
          } else if (nf.token_address === '0x3f691327267993cfe4842ca1364a52dfe6190ec1') {
            const v2Nft = new nft(nf.token_id, nf.token_uri)
            v2Ids.push(v2Nft);
          }
        });
        this.v1NftIdArraySubject.next(v1Ids);
        this.v2NftIdArraySubject.next(v2Ids);
        this.metaMaskConnectedSubject.next(true);
      })
    }).catch((err: any) => {
      console.log(err);
      this.metaMaskConnectedSubject.next(false);
    });
  }

}
