import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModalService } from './common-modal.service';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.scss']
})

export class CommonModalComponent {
  modalContent: { title: string, message: string, buttonText: string } = { title: '', message: '', buttonText: '' };

  @ViewChild('myModal', { static: false }) modal!: ElementRef<any>;

  constructor(private modalService: CommonModalService) {}

  ngOnInit() {
    this.modalService.modalContent$.subscribe((content: { title: string, message: string, buttonText: string }) => {
      if (content.title || content.message) {
        this.modalContent = content;
        this.modal.nativeElement.style.display = 'block';
      } else {
        this.modal.nativeElement.style.display = 'none';
      }
    });
  }

  close() {
    this.modalService.closeModal();
  }
  invalid(){
    this.modalService.closeModal();
  }
  error(){
    this.modalService.closeModal();
  }
  success() {
    window.location.reload();
  }
}
