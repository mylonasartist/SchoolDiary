import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DiariesComponent } from './diaries/diaries.component';
import { AboutComponent } from './about/about.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { AuthenticatedGuard } from './authenticated.guard';
import { AdminGuard } from './admin.guard';

const routes: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'diaries', component: DiariesComponent, canActivate: [AuthenticatedGuard] },
  { path: 'about', component: AboutComponent},
  { path: 'login', component: AuthenticationComponent},
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canActivate: [AdminGuard]
  },
  { path: '', component: HomeComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
