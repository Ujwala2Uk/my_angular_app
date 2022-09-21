import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MelodyComponent } from './melody/melody.component';
import { DanceComponent } from './dance/dance.component';
import { ClassicalComponent } from './classical/classical.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { PopularComponent } from './popular/popular.component';
import { TrendingComponent } from './trending/trending.component';
import { MytopComponent } from './mytop/mytop.component';
import { FvtComponent } from './fvt/fvt.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StartregisterComponent } from './startregister/startregister.component';
import { StartloginComponent } from './startlogin/startlogin.component';
const routes: Routes = [
  {path:'Home' , component:HomeComponent },
  {path:'Melody' , component:MelodyComponent },
  {path:'Dance' , component:DanceComponent },
  {path:'Classical' , component:ClassicalComponent },
  {path:'Admin',component:AdminComponent},
  {path:'Music', component:MusicComponent},
  {path:'Popular',component:PopularComponent},
  {path:'Trending',component:TrendingComponent},
  {path:'Mytop',component:MytopComponent},
  {path:'Fvt',component:FvtComponent},
  {path:'Register', component:RegisterComponent},
  {path:'Login', component:LoginComponent},
  {path:'Startlogin', component:StartloginComponent},
  {path:'Startregister', component:StartregisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
