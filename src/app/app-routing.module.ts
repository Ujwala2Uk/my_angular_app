import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MelodyComponent } from './melody/melody.component';
import { DanceComponent } from './dance/dance.component';
import { ClassicalComponent } from './classical/classical.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'Home' , component:HomeComponent },
  {path:'Melody' , component:MelodyComponent },
  {path:'Dance' , component:DanceComponent },
  {path:'Classical' , component:ClassicalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
