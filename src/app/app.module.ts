import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { YesOrNoService } from './yes-or-no.service';
import { HttpClientModule } from '@angular/common/http';

import { YesNoComponent } from './yes-no/yes-no.component';
import { ChuckNorrisComponent } from './chuck-norris/chuck-norris.component';


@NgModule({
  declarations: [
    AppComponent,
    YesNoComponent,
    ChuckNorrisComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [YesOrNoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
