import {Routes} from '@angular/router';
import {HomeComponent} from '@app/module/home/home.component';

export const RootRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    loadChildren: './module/home/home.module#HomeModule',
    data: {preload: true}
  }
];
