import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PropposalComponent } from './information/propposal/propposal.component';
import { InformationComponent } from './information/information.component';
import { ActivitiesComponent } from './information/activities/activities.component';

const appRoutes: Routes = [
  { path: '', component: InformationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PropposalComponent,
    InformationComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
