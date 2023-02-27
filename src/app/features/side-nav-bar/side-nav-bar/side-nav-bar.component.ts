import { Component, OnInit } from '@angular/core';
import { navbarData } from './nav-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit {
  collapsed = false;
  navData = navbarData;
  clicked = true;
  notificationClick = false;
  searchClick = false;
  createClick = false;
  createAndProfileClick = false;
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  sideClick(name: any) {
    if (name == 'search') {
      this.searchClick = !this.searchClick;
      if (this.notificationClick) {
        this.notificationClick = false;
      }
      else {
        this.collapsed = !this.collapsed;
      }
    }
    else if (name == 'notify') {
      this.notificationClick = !this.notificationClick;
      if (this.searchClick) {
        this.searchClick = false;
      }
      else {
        this.collapsed = !this.collapsed;
      }
    }
    else if(name == 'create'){
      this.createClick = !this.createClick;
      // this.createAndProfileClick = !this.createAndProfileClick;
    }
    else{
      this.collapsed = false;
      this.searchClick =false;
      this.notificationClick = false;
    }
    
  }
}
