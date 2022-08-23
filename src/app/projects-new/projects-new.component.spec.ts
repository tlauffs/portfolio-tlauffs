import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsNewComponent } from './projects-new.component';

describe('ProjectsNewComponent', () => {
  let component: ProjectsNewComponent;
  let fixture: ComponentFixture<ProjectsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
