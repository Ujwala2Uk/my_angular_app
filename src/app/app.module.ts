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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
