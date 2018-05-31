import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routing = RouterModule.forChild([
  { path: 'main', component: AdminComponent },
  { path: '', redirectTo: 'main'}
]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
