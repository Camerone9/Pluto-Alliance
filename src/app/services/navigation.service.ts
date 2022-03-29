import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private pageTitleSubject: BehaviorSubject<string> = new BehaviorSubject('Login');
  public pageTitle$ = this.pageTitleSubject.asObservable();

  constructor() { }

  updatePageTitle(title: string) {
    this.pageTitleSubject.next(title);
  }
}
