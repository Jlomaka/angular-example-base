import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {API} from '@service/api';
// layout
import {HeaderComponent} from '@app/layout/header/header.component';
// components
import {AppComponent} from './app.component';
import {BaseComponent} from '@app/components/base/base.component';
import {RootRoutes} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(RootRoutes),
  ],
  providers: [
    API,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
