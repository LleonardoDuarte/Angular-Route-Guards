import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { AccountComponent } from './shared/pages/account/account.component';

// Guards
import { CanActiveGuard } from './shared/guards/canActive/can-active.guard';
import { CanDeactiveGuard } from './shared/guards/canDeactive/can-deactive.guard';
import { CanloadGuard } from './shared/guards/canLoad/canload.guard';
import { CanActiveChildGuard } from './shared/guards/canActiveChild/can-active-child.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [CanActiveGuard],
    canDeactivate: [CanDeactiveGuard],
  },

  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
    canLoad: [CanloadGuard],
    canActivateChild: [CanActiveChildGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
