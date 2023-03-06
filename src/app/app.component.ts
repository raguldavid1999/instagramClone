import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // this.isAuthenticate = true;
  }
  title = 'instagramClone';
  isAuthenticate = false;
}
