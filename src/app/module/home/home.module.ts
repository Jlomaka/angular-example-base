import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {HomeComponent} from '@app/module/home/home.component';

import {HomeRouting} from '@app/module/home/home.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(HomeRouting)
  ],
  declarations: [
    HomeComponent
  ],
  exports: [HomeComponent],
})
export class HomeModule {

}