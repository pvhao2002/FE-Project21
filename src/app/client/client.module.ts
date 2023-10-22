import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './spinner/spinner.component';
import {TopbarComponent} from './topbar/topbar.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AboutComponent} from './about/about.component';
import {ServiceComponent} from './service/service.component';
import {DestinationComponent} from './destination/destination.component';
import {PackageComponent} from './package/package.component';
import {BookingComponent} from './booking/booking.component';
import {ProcessComponent} from './process/process.component';
import {TeamComponent} from './team/team.component';
import {TestimonialComponent} from './testimonial/testimonial.component';
import {FooterComponent} from './footer/footer.component';
import {ClientComponent} from './client.component';
import {HomeComponent} from './home/home.component';
import {ClientRoutingModule} from "./client-routing.module";
import { RegisterComponent } from './register/register.component';
import {FormsModule} from "@angular/forms";
import { MyBookingComponent } from './my-booking/my-booking.component';


@NgModule({
  declarations: [
    SpinnerComponent,
    TopbarComponent,
    NavbarComponent,
    AboutComponent,
    ServiceComponent,
    DestinationComponent,
    PackageComponent,
    BookingComponent,
    ProcessComponent,
    TeamComponent,
    TestimonialComponent,
    FooterComponent,
    ClientComponent,
    HomeComponent,
    RegisterComponent,
    MyBookingComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule
  ]
})
export class ClientModule {
}
