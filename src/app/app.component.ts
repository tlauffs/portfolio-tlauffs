import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'homepage';
  @ViewChild('navMenu') navMenu: any;
  navMenuWidth = 0;

  ngOnInit(){
    $(document).foundation();
  }

  nav_open(){
    this.navMenuWidth = 150;
  }
  nav_close(){
    this.navMenuWidth = 0;
  }
}

