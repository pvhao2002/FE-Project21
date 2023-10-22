import {NgModule} from '@angular/core';
import {mapToCanActivate, RouterModule, Routes} from '@angular/router';
import {ClientModule} from './client/client.module';
import {AdminModule} from './admin/admin.module';
import {adminGuardGuard} from "./admin-guard.guard";
import {PageNotFoundComponent} from "./client/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => ClientModule,
  },
  {
    path: 'admin',
    canActivate: [adminGuardGuard],
    loadChildren: () => AdminModule,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
