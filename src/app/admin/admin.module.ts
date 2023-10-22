import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from "./admin-routing.module";
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { UserComponent } from './user/user.component';
import { ServiceComponent } from './service/service.component';
import { UpdateServiceComponent } from './service/update-service/update-service.component';
import { AddServiceComponent } from './service/add-service/add-service.component';
import {FormsModule} from "@angular/forms";
import { PackageComponent } from './package/package.component';
import { AddPackageComponent } from './package/add-package/add-package.component';
import { DestinationComponent } from './destination/destination.component';
import { AddDestinationComponent } from './destination/add-destination/add-destination.component';
import { BookingComponent } from './booking/booking.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    AdminComponent,
    FooterComponent,
    SpinnerComponent,
    UserComponent,
    ServiceComponent,
    UpdateServiceComponent,
    AddServiceComponent,
    PackageComponent,
    AddPackageComponent,
    DestinationComponent,
    AddDestinationComponent,
    BookingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
