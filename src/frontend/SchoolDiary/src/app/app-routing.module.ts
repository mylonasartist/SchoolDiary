import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DiariesComponent } from './diaries/diaries.component';
import { AboutComponent } from './about/about.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Route[] = [
  { path: 'diaries', component: DiariesComponent },
  { path: 'about', component: AboutComponent},
  { path: 'login', component: AuthenticationComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
