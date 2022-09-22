import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from"@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MelodyComponent } from './melody/melody.component';
import { DanceComponent } from './dance/dance.component';
import { ClassicalComponent } from './classical/classical.component';
import { HomeComponent } from './home/home.component';
import { FindComponent } from './find/find.component';
import { SearchComponent } from './search/search.component';
import { MusicComponent } from './music/music.component';
import { MusicextentionComponent } from './music/musicextention/musicextention.component';
import { TracksComponent } from './tracks/tracks.component';
import { AddsComponent } from './adds/adds.component';
import { PopularComponent } from './popular/popular.component';
import { TrendingComponent } from './trending/trending.component';
import { MytopComponent } from './mytop/mytop.component';
import { FvtComponent } from './fvt/fvt.component';
import { AllsongComponent } from './allsong/allsong.component';
import { CountComponent } from './count/count.component';
import { CountchildComponent } from './count/countchild/countchild.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// import { map } from 'rxjs';
import { AdminComponent } from './admin/admin.component';

import { LoginComponent } from './login/login.component';
import { StartloginComponent } from './startlogin/startlogin.component';
import { StartregisterComponent } from './startregister/startregister.component';
import { CartItemsComponent } from './cart-items/cart-items.component';


@NgModule({
  declarations: [
    AppComponent,
    MelodyComponent,
    DanceComponent,
    ClassicalComponent,
    HomeComponent,
    FindComponent,
    SearchComponent,
    MusicComponent,
    MusicextentionComponent,
    TracksComponent,
    AddsComponent,
    PopularComponent,
    TrendingComponent,
    MytopComponent,
    FvtComponent,
    AllsongComponent,
    CountComponent,
    CountchildComponent,
    RegisterComponent,
    AdminComponent,
    LoginComponent,
    StartloginComponent,
    StartregisterComponent,
    CartItemsComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
