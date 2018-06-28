import { Component, OnInit } from '@angular/core';
import { Texts } from '../admin.module.texts';
import { Subject } from '../../domain/subject/model/subject';
import { SubjectService } from '../../domain/subject/service/subject.service';
import { SubjectFormGroupService } from './subject.formgroup.service';
import { AppFormGroup } from '../../controls/app.formgroup';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.editor.component.html',
  styleUrls: ['./subject.editor.component.css']
})
export class SubjectEditorComponent implements OnInit {

  // TODO use form, validation.
  // form: SubjectFormGroup;
  subjects: Subject[] = [];
  currentIndex: number;
  form: AppFormGroup;

  constructor(public texts: Texts,
    private subjectsService: SubjectService,
    private formGroupService: SubjectFormGroupService) {}

  ngOnInit() {
    // this.form = new SubjectFormGroup();
    this.loadSubjects();
    this.form = this.formGroupService.toFormGroup(this.subjects);
  }

  loadSubjects() {
    // TODO load from backend
    this.subjectsService.get().subscribe(subjects => {
      this.subjects = subjects;
      this.form = this.formGroupService.toFormGroup(this.subjects);
    });
  }

  save() {
    // TODO save to backend
    console.log('Saving subjects...');

    // TODO remove after debug
    this.form.getValidationMessages().forEach(message => console.log(message));
  }

  addNew() {
    if (this.subjects.length === 0 || this.subjects[this.subjects.length - 1].name) {
      this.subjects.push(new Subject());
      this.formGroupService.addControls(this.form, this.subjects.length - 1);
    }
  }

  // TODO add warning, question "Are you sure...?"
  removeCurrent() {
    this.subjects.splice(this.currentIndex, 1);
  }

  getControlName(index: number, propertyName: string): string {
    return index + propertyName;
  }
}
