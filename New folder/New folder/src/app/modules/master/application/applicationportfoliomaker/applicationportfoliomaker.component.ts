import { Component, OnInit } from '@angular/core';
import { CommenPopupService } from 'src/app/components/common-popup/common-popup.service';
import { SpinnerService } from 'src/app/components/spinner/spinner.service';

@Component({
  selector: 'app-applicationportfoliomaker',
  templateUrl: './applicationportfoliomaker.component.html',
  styleUrls: ['./applicationportfoliomaker.component.scss']
})
export class ApplicationportfoliomakerComponent implements OnInit{

  showSpinner: boolean = false;

  constructor(public spinnerService:SpinnerService,public commenmodel:CommenPopupService){}


  ngOnInit(): void {
    // Simulating an asynchronous operation, e.g., an HTTP request
    this.spinnerService.start();

    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000);
  }

  submit() {
    this.commenmodel.openModal('Record Added', 'Record added succesfully?');

    
  }




  
}

