import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  modalContent: { title: string, message: string, buttonText: string } = { title: '', message: '', buttonText: '' };

  @ViewChild('myModal', { static: false }) modal!: ElementRef<any>;

  constructor(private modalService: ModalService) {}

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

// export class ModalComponent {
//   modalContent: { title: string, message: string } = { title: '', message: '' };

//   @ViewChild('myModal', { static: false }) modal!: ElementRef<any>;
//   constructor(private modalService: ModalService) {}

//   ngOnInit() {
//     this.modalService.modalContent$.subscribe((content: { title: string, message: string }) => {
//       if (content.title || content.message) {
//         this.modalContent = content;
//         this.modal.nativeElement.style.display = 'block';
//       } else {
//         this.modal.nativeElement.style.display = 'none';
//       }
//     });
//   }

//   close() {
//     this.modalService.closeModal();
//   }

//   onOk() {
//     window.location.reload();
//   }

  
// }
