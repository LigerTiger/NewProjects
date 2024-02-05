import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

 

  private menuToggleSubject = new BehaviorSubject<boolean>(false);
  private hamburgerActiveSubject = new BehaviorSubject<boolean>(false);

  menuToggle$: Observable<boolean> = this.menuToggleSubject.asObservable();
  hamburgerActive$: Observable<boolean> = this.hamburgerActiveSubject.asObservable();

  toggleMenu() {
    const currentToggleValue = this.menuToggleSubject.value;
    this.menuToggleSubject.next(!currentToggleValue);
    this.hamburgerActiveSubject.next(!currentToggleValue);
  }

}
