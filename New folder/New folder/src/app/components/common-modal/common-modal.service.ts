import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonModalService {

  private modalContent: BehaviorSubject<{ title: string, message: string, buttonText: string }> = new BehaviorSubject<{ title: string, message: string, buttonText: string }>({ title: '', message: '', buttonText: '' });

  modalContent$: Observable<{ title: string, message: string, buttonText: string }> = this.modalContent.asObservable();

  openModal(title: string, message: string, buttonText: string): void {
    this.modalContent.next({ title, message, buttonText });
  }

  closeModal(): void {
    this.modalContent.next({ title: '', message: '', buttonText: '' });
  }
}
