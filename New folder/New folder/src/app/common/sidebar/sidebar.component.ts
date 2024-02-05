import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isMenuVisible = false;
  isMenuToggle = false;


  constructor(private menuService: SharedService) { }

  ngOnInit(): void {
    this.menuService.menuToggle$.subscribe((isToggle) => {
      this.isMenuToggle = isToggle;
      this.toggleMenu();

    });
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }


}

