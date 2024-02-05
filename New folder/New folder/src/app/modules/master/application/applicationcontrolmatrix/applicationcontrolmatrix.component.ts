import { Component, OnInit } from '@angular/core';
import { CommenPopupService } from 'src/app/components/common-popup/common-popup.service';
import { SpinnerService } from 'src/app/components/spinner/spinner.service';
import { ApplicationcontrolmatrixService } from './applicationcontrolmatrix.service';

@Component({
  selector: 'app-applicationcontrolmatrix',
  templateUrl: './applicationcontrolmatrix.component.html',
  styleUrls: ['./applicationcontrolmatrix.component.scss']
})
export class ApplicationcontrolmatrixComponent implements OnInit{




  constructor(public spinnerService:SpinnerService,public commonmodel:CommenPopupService,private applicationcontrolmatrixService:ApplicationcontrolmatrixService){}



  ngOnInit(): void {
    this.spinnerService.start();

    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000);
    //start main code her

  }

   // this.commonmodel.openModal('Record Added', 'Record added succesfully?');
  getApplicationlistName(){
    
  }




}
