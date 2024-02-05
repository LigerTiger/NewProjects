import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private spinnerSubject = new BehaviorSubject<boolean>(false);
  spinnerState = this.spinnerSubject.asObservable();

  // Rename the method to avoid naming conflict
  start() {
    this.spinnerSubject.next(true);
  }

  hide() {
    this.spinnerSubject.next(false);
  }


  
}
