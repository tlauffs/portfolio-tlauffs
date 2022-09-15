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
import projectJson from '../../assets/projects.json';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

declare var Parallax: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0, zIndex: 1000 }),
        animate('0.5s ease', style({ opacity: 1, zIndex: 1000 })),
      ]),
      transition(':leave', [
        style({ opacity: 1, zIndex: 1000 }),
        animate('0.5s ease', style({ opacity: 0, zIndex: 1000 })),
      ]),
    ]),
  ],
})
export class HomepageComponent implements OnInit, AfterViewInit {
  x = 0;
  y = 0;
  initx = 0;
  inity = 0;
  speed = 0.2;
  projectList = projectJson;
  modalopen = false;
  index = 0;
  @ViewChild('backgroundscene') scene: ElementRef | undefined;
  @ViewChild('backgroundscene2') scene2: ElementRef | undefined;
  @ViewChild('backgroundscene3') scene3: ElementRef | undefined;
  @ViewChild('backgroundscene4') scene4: ElementRef | undefined;
  @ViewChild('backgroundscene5') scene5: ElementRef | undefined;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    var parallaxInstance = new Parallax(this.scene?.nativeElement);
    var parallaxInstance2 = new Parallax(this.scene2?.nativeElement);
    var parallaxInstance2 = new Parallax(this.scene3?.nativeElement);
    var parallaxInstance2 = new Parallax(this.scene4?.nativeElement);
    var parallaxInstance2 = new Parallax(this.scene5?.nativeElement);
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    let y = window.pageYOffset;
  }

  scroll(ele: string) {
    document.getElementById(ele)!.scrollIntoView({ behavior: 'smooth' });
  }

  openModal(index: any){
    this.index = index;
    this.modalopen = true;
  }

  closeModal() {
    this.modalopen = false;
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.modalopen = false;
  }
}
