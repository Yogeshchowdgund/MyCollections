import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenetAComponent } from './SampleComonent/componenet-a/componenet-a.component';
import { ComponenetBComponent } from './SampleComonent/componenet-b/componenet-b.component';
import { ComponenetCComponent } from './SampleComonent/componenet-c/componenet-c.component';

const routes: Routes = [
  { path: 'ComponentA', component: ComponenetAComponent },
  { path: 'ComponentB', component: ComponenetBComponent },
  { path: 'ComponentC', component: ComponenetCComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
