import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientComponent} from "./client.component";
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {AboutComponent} from "./about/about.component";
import {PackageComponent} from "./package/package.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {BookingComponent} from "./booking/booking.component";
import {MyBookingComponent} from "./my-booking/my-booking.component";

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: '404',
        component: PageNotFoundComponent
      }
      , {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }, {
        path: 'about',
        component: AboutComponent
      }, {
        path: 'package',
        component: PackageComponent
      }, {
        path: 'booking',
        component: BookingComponent
      }, {
        path: 'my-booking',
        component: MyBookingComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {
}
