import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { YesNoComponent } from './yes-no/yes-no.component';

import { YesOrNoService } from './yes-or-no.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    YesNoComponent
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
