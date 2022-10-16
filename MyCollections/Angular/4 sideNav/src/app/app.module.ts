import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ComponenetAComponent } from './SampleComonent/componenet-a/componenet-a.component';
import { ComponenetBComponent } from './SampleComonent/componenet-b/componenet-b.component';
import { ComponenetCComponent } from './SampleComonent/componenet-c/componenet-c.component';
import { ComponenetDComponent } from './SampleComonent/componenet-d/componenet-d.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ComponenetAComponent,
    ComponenetBComponent,
    ComponenetCComponent,
    ComponenetDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
