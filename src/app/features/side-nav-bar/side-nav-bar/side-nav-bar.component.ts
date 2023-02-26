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
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  sideClick(name:any){
    this.collapsed = !this.collapsed;
    if(name=='search'){
      // this.collapsed = !this.collapsed;
      this.searchClick = !this.searchClick;
      this.notificationClick = false;
      this.createClick = false;
    }
    else if(name=='notification'){
      // this.collapsed = !this.collapsed;
      this.searchClick = false;
      this.notificationClick = !this.notificationClick;
      this.createClick = false;
    }
    else if(name=='create'){
      this.collapsed = !this.collapsed;
      this.searchClick = false;
      this.notificationClick = false;
      this.createClick = !this.createClick;
    }
    else{
      this.collapsed = !this.collapsed;
      this.searchClick = false;
      this.notificationClick = false;
      this.createClick = false;
      // this.collapsed = false;
      // this.clicked = true;
    }
  }
}
