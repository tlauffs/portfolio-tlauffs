import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as AOS from 'aos';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'homepage';
  @ViewChild('homecomp') homecomp: any;
  navMenuWidth = 0;
  navOpen = false;

  ngOnInit() {
  }
  
  scroll(ele: string) {
    document.getElementById(ele)!.scrollIntoView({ behavior: 'smooth' });
    this.navMenuWidth = 0;
    this.navOpen = false;
  }

  nav_open() {
    this.navMenuWidth = 9.375;
    this.navOpen = true;
  }
  nav_close() {
    this.navMenuWidth = 0;
    this.navOpen = false;
  }
}
