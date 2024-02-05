import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommenPopupService {
  private showModal = new BehaviorSubject<boolean>(false);
  private modalData = new BehaviorSubject<{ title: string; message: string }>({ title: '', message: '' });

  get showModal$() {
    return this.showModal.asObservable();
  }

  get modalData$() {
    return this.modalData.asObservable();
  }

  openModal(title: string, message: string) {
    this.modalData.next({ title, message });
    this.showModal.next(true);
  }

  closeModal() {
    this.showModal.next(false);
  }

}
