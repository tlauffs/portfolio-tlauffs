import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsNewComponent } from './projects-new/projects-new.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExperienceComponent } from './experience/experience.component'

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutMeComponent,
    FooterComponent,
    ContactComponent,
    ProjectsNewComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
