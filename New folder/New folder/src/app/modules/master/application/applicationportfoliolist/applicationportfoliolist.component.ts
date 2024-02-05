import { Component, OnInit } from '@angular/core';
import { CommenPopupService } from 'src/app/components/common-popup/common-popup.service';
import { SpinnerService } from 'src/app/components/spinner/spinner.service';

@Component({
  selector: 'app-applicationportfoliolist',
  templateUrl: './applicationportfoliolist.component.html',
  styleUrls: ['./applicationportfoliolist.component.scss']
})
export class ApplicationportfoliolistComponent implements OnInit {

  showSpinner: boolean = false;



  constructor(public spinnerService:SpinnerService,public commenmodel:CommenPopupService){

  }

  ngOnInit(): void {
    this.spinnerService.start();

    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);
  }


}
