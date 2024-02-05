import { Component, Input } from '@angular/core';
import { CommenPopupService } from './common-popup.service';

@Component({
  selector: 'app-common-popup',
  templateUrl: './common-popup.component.html',
  styleUrls: ['./common-popup.component.scss']
})
export class CommenPopupComponent {


  @Input() title: string = '';
  @Input() message: string = '';

 
  constructor( private commenpopup:CommenPopupService){

  }


  ngOnInit(): void {
  }


  closeModal() {
   this.commenpopup.closeModal()
  //  window.location.reload();
  }

  onOk() {
   this.closeModal();
   window.location.reload();

  }


}
