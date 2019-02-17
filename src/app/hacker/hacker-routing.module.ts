import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HackerComponent } from './hacker.component';

const routes: Routes = [
  { path: '', component: HackerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HackerRoutingModule { }
