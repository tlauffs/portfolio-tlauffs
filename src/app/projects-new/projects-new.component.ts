import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import projectJson from '../../assets/projects.json';

@Component({
  selector: 'app-projects-new',
  templateUrl: './projects-new.component.html',
  styleUrls: ['./projects-new.component.scss'],
})
export class ProjectsNewComponent implements OnInit {
  constructor() {}
  @Output('openModal') openModal: EventEmitter<any> = new EventEmitter();

  projectList = projectJson;

  ngOnInit(): void {}

  openModalClick(index: number) {
    this.openModal.emit(index);
  }

}
