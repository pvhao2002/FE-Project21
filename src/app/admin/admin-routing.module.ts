import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
import {ServiceComponent} from "./service/service.component";
import {AddServiceComponent} from "./service/add-service/add-service.component";
import {UpdateServiceComponent} from "./service/update-service/update-service.component";
import {PackageComponent} from "./package/package.component";
import {AddPackageComponent} from "./package/add-package/add-package.component";
import {DestinationComponent} from "./destination/destination.component";
import {AddDestinationComponent} from "./destination/add-destination/add-destination.component";
import {BookingComponent} from "./booking/booking.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      }, {
        path: 'user',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: UserComponent
          }
        ]
      },
      {
        path: 'service',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          }, {
            path: 'list',
            component: ServiceComponent
          }, {
            path: 'add',
            component: AddServiceComponent
          }, {
            path: 'update/:id',
            component: UpdateServiceComponent
          }
        ]
      }, {
        path: 'package',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          }, {
            path: 'list',
            component: PackageComponent
          }, {
            path: 'add',
            component: AddPackageComponent
          }
        ]
      }, {
        path: 'destination',
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          }, {
            path: 'list',
            component: DestinationComponent
          }, {
            path: 'add',
            component: AddDestinationComponent
          }
        ]
      }, {
        path: 'booking',
        component: BookingComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
