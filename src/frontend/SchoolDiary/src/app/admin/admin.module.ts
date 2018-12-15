import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectEditorComponent } from './subject.editor/subject.editor.component';
import { Texts } from './admin.module.texts';
import { SubjectFormGroupService } from './subject.editor/subject.formgroup.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubjectsViewComponent } from './subjects.view/subjects.view.component';

const routing = RouterModule.forChild([
  { path: 'main', component: AdminComponent,
      children: [
        { path: 'subjects/:id', component: SubjectEditorComponent },
        { path: 'subjects/create', component: SubjectEditorComponent },
        { path: 'subjects', component: SubjectsViewComponent }
      ]
  },
  { path: '', redirectTo: 'main'}
]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    NgbModule.forRoot()
  ],
  declarations: [AdminComponent, SubjectEditorComponent, SubjectsViewComponent],
  providers: [
    Texts,
    SubjectFormGroupService
  ]
})
export class AdminModule { }
