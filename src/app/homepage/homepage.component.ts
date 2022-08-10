import {
  Component,
  OnInit,
  HostListener,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
// @ts-ignore
import * as Parallax from 'parallax-js';

declare var Parallax: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit, AfterViewInit {
  x = 0;
  y = 0;
  initx = 0;
  inity = 0;
  speed = 0.2;
  @ViewChild('backgroundscene') scene: ElementRef | undefined;
  @ViewChild('backgroundscene2') scene2: ElementRef | undefined;

 // @ViewChild('headertext') text: ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    var parallaxInstance = new Parallax(this.scene?.nativeElement);
    var parallaxInstance2 = new Parallax(this.scene2?.nativeElement);
    // var parallaxInstanceText = new Parallax(this.text?.nativeElement);
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    let y = window.pageYOffset;
      /*
    let layer1 = document.getElementById('building-1');
    let movement = -y * 0.1;
    layer1!.style.transform = 'translatey(' + movement + 'vh)';
    let layer1bottom =  document.getElementById('building-bottom-1');
    layer1bottom!.style.transform = 'translatey(' + movement + 'vh)';
    let layer2 =  document.getElementById('building-2');
    movement = -y * 0.09;
    layer2!.style.transform = 'translatey(' + movement + 'vh)';
    let layer2bottom =  document.getElementById('building-bottom-2');
    layer2bottom!.style.transform = 'translatey(' + movement + 'vh)';
    let layer3 =  document.getElementById('building-3');
    movement = -y * 0.08;
    layer3!.style.transform = 'translatey(' + movement + 'vh)';
    let layer3bottom =  document.getElementById('building-bottom-3');
    layer3bottom!.style.transform = 'translatey(' + movement + 'vh)';

    let layer4 = document.getElementById('building-4');
    let movement = y * 0.07; 
    layer4!.style.transform = 'translatey(' + movement + 'vh)';
    let building4bottom = document.getElementById('building-bottom-4');
    building4bottom!.style.transform = 'translatey(' + movement + 'vh)';
       */
  }

  scroll(ele: string) {
    document.getElementById(ele)!.scrollIntoView({ behavior: 'smooth' });
  }
  
  /* 
  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e: any) {
    if (this.init) {
      this.initx = e.clientX;
      this.inity = e.clientY;
      this.init = false;
    } else {
      this.x = this.initx - e.clientX;
      this.y = this.inity - e.clientY;
    } 
    /*
    let mousex = e.clientX;
    let mousey = e.clientY;
    let shape = this.ex1Layer!.getBoundingClientRect();
      this.y = (mousex - shape.x - (shape.width / 2)) / this.constrain;
      this.x = -(mousey - shape.y - (shape.height / 2)) / this.constrain;
  }    */
}
