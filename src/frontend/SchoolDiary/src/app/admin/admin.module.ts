import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectComponent } from './subject/subject.component';
import { Texts } from './admin.module.texts';

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
    ReactiveFormsModule,
    routing
  ],
  declarations: [AdminComponent, SubjectComponent],
  providers: [
    Texts
  ]
})
export class AdminModule { }
