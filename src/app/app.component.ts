import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';
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
  navOpen = false;

  ngOnInit(){
    $(document).foundation();
    AOS.init();
  }

  nav_open(){
    this.navMenuWidth = 150;
    this.navOpen = true;
  }
  nav_close(){
    this.navMenuWidth = 0;
    this.navOpen = false;
  }
}

