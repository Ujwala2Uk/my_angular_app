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


@NgModule({
  declarations: [
    AppComponent,
    MelodyComponent,
    DanceComponent,
    ClassicalComponent,
    HomeComponent,
    FindComponent,
    SearchComponent,
   
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
