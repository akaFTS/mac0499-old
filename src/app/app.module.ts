import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatSliderModule } from '@angular/material/slider'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ChartsModule } from 'ng2-charts'
import { FormsModule } from '@angular/forms'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { PropposalComponent } from './information/propposal/propposal.component'
import { InformationComponent } from './information/information.component'
import { ActivitiesComponent } from './information/activities/activities.component'
import { CourseComponent } from './course/course.component'
import { TimelineComponent } from './course/timeline/timeline.component'
import { StudentsComponent } from './course/students/students.component'
import { ProfessorsComponent } from './course/professors/professors.component'
import { ToolbarComponent } from './toolbar/toolbar.component'
import { MomentPipe } from './course/timeline/moment.pipe'
import { ProfessorComponent } from './course/professors/professor/professor.component'
import { HttpClientModule } from '../../node_modules/@angular/common/http'
import { ClassesComponent } from './classes/classes.component'
import { ClassesListComponent } from './classes/classes-list/classes-list.component'
import { AreaYearComponent } from './classes/area-year/area-year.component'
import { YearpickerComponent } from './shared/yearpicker/yearpicker.component'
import { AreaPipe } from './classes/classes-list/area.pipe'
import { YearPipe } from './classes/classes-list/year.pipe'

const appRoutes: Routes = [
  { path: '', component: CourseComponent },
  { path: 'info', component: InformationComponent },
  { path: 'classes', component: ClassesComponent },
]
library.add(fas, far)

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
    ToolbarComponent,
    MomentPipe,
    AreaPipe,
    YearPipe,
    ProfessorComponent,
    ClassesComponent,
    ClassesListComponent,
    AreaYearComponent,
    YearpickerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSliderModule,
    MatTooltipModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
