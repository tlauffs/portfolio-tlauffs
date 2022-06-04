import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}
  x = 0;
  y = 0;
  constrain = 40;
  shape1moved = false;
  shape2moved = false;
  @ViewChild('imagecover') imageCover: ElementRef | undefined;
  @ViewChild('imagecover2') imageCover2: ElementRef | undefined;

  ngOnInit(): void {}

  mouseentercover1(e: any) {
    let mousex = e.clientX;
    let mousey = e.clientY;
    let shape1 = this.imageCover!.nativeElement.getBoundingClientRect();
    this.y = (mousex - shape1.x - shape1.width / 2) / this.constrain;
    this.x = -(mousey - shape1.y - shape1.height / 2) / this.constrain;
    this.imageCover!.nativeElement.style.transform = `translateY(-50%) scale(1.1) perspective(${500}px) rotateX(${
      this.x
    }deg) rotateY(${this.y}deg)`;
    console.log('test');
  }

  mouseleave1(){
    this.imageCover!.nativeElement.style.transform = `translateY(-50%) scale(1.0) rotateX(${0}deg) rotateY(${0}deg)`;
  }

  mouseentercover2(e: any) {
    let mousex = e.clientX;
    let mousey = e.clientY;
    let shape2 = this.imageCover2!.nativeElement.getBoundingClientRect();
    this.y = (mousex - shape2.x - shape2.width / 2) / this.constrain;
    this.x = -(mousey - shape2.y - shape2.height / 2) / this.constrain;
    this.imageCover2!.nativeElement.style.transform = `translateY(-50%) scale(1.1) perspective(${500}px) rotateX(${
      this.x
    }deg) rotateY(${this.y}deg)`;
    console.log('test');
  }


  mouseleave2(){
    this.imageCover2!.nativeElement.style.transform = `translateY(-50%) scale(1.0) rotateX(${0}deg) rotateY(${0}deg)`;
  }

  /*@HostListener('document:mousemove', ['$event'])
  onMouseMove2(e: any) {
    let mousex = e.clientX;
    let mousey = e.clientY;
    let shape2 = this.imageCover2!.nativeElement.getBoundingClientRect();
    if (
      shape2.x <= mousex &&
      mousex <= shape2.x + shape2.width &&
      shape2.y <= mousey &&
      mousey <= shape2.y + shape2.height
    ) {
      this.y = (mousex - shape2.x - shape2.width / 2) / this.constrain;
      this.x = -(mousey - shape2.y - shape2.height / 2) / this.constrain;
      this.shape2moved = true;
      this.imageCover2!.nativeElement.style.transform = `translateY(-50%) scale(1.1) perspective(${500}px) rotateX(${
        this.x
      }deg) rotateY(${this.y}deg)`;
    } else {
      if (this.shape2moved) {
        this.shape2moved = false;
        console.log('test');
        this.imageCover2!.nativeElement.style.transform = `translateY(-50%) scale(1.0) rotateX(${0}deg) rotateY(${0}deg)`;
      }
    }
  } */
}
