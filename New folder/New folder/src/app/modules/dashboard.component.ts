import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../components/spinner/spinner.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  


  constructor(public spinnerService:SpinnerService){}


  ngOnInit(): void {
    // Simulating an asynchronous operation, e.g., an HTTP request
    this.spinnerService.start();

    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000);
  }



}
