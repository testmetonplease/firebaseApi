import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './hacker/hacker.module#HackerModule'
 },
 {
    path: 'hacker',
    loadChildren: './hacker/hacker.module#HackerModule',
},
{
    path: 'error',
    loadChildren: './error-page/error-page.module#ErrorPageModule'
},
{ path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
