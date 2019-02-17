import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HackerRoutingModule } from './hacker-routing.module';
import { HackerComponent } from './hacker.component';


import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HackerComponent],
  imports: [
    CommonModule,
    HackerRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class HackerModule { }
