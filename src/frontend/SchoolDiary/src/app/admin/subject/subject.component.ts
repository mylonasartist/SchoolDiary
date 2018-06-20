import { Component, OnInit } from '@angular/core';
import { SubjectFormGroup } from './subject.form.group';
import { Subject } from '../../model/subject';
import { Texts } from '../admin.module.texts';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  // TODO use form, validation.
  // form: SubjectFormGroup;
  subjects: Subject[];
  currentIndex: number;

  constructor(public texts: Texts) {}

  ngOnInit() {
    // this.form = new SubjectFormGroup();
    this.loadSubjects();
  }

  loadSubjects() {
    // TODO load from backend
    this.subjects = [];
  }

  save() {
    // TODO save to backend
    console.log('Saving subjects...');
  }

  addNew() {
    if (this.subjects.length === 0 || this.subjects[this.subjects.length - 1].name) {
      this.subjects.push(new Subject());
    }
  }

  removeCurrent() {
    this.subjects.splice(this.currentIndex, 1);
  }
}
