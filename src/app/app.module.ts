import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PropposalComponent } from './information/propposal/propposal.component';
import { InformationComponent } from './information/information.component';
import { ActivitiesComponent } from './information/activities/activities.component';
import { CourseComponent } from './course/course.component';
import { TimelineComponent } from './course/timeline/timeline.component';
import { StudentsComponent } from './course/students/students.component';
import { ProfessorsComponent } from './course/professors/professors.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const appRoutes: Routes = [
  { path: '', component: CourseComponent },
  { path: 'info', component: InformationComponent }
];
library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PropposalComponent,
    InformationComponent,
    ActivitiesComponent,
    CourseComponent,
    TimelineComponent,
    StudentsComponent,
    ProfessorsComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
