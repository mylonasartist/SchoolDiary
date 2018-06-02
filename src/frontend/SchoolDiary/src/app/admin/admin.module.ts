import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SubjectComponent } from './subject/subject.component';

const routing = RouterModule.forChild([
  { path: 'main', component: AdminComponent ,
      children: [
        { path: 'subject', component: SubjectComponent }
      ]
  },
  { path: '', redirectTo: 'main'}
]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [AdminComponent, SubjectComponent]
})
export class AdminModule { }
