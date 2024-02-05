import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isHamburgerActive = false;

  constructor(private menuService: SharedService) {
    this.menuService.hamburgerActive$.subscribe((isActive) => {
      this.isHamburgerActive = isActive;
    });
    const currentDate = new Date();
    this.currentDateTime = this.formatDate(currentDate);
   }

   currentDateTime:any


   

   formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }



  homeClick() {
    this.menuService.toggleMenu();
  }

}
