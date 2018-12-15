import { Component, OnInit } from '@angular/core';
import { Texts } from '../admin.module.texts';
import { Subject } from '../../domain/subject/model/subject';
import { SubjectService } from '../../domain/subject/service/subject.service';
import { SubjectFormGroupService } from './subject.formgroup.service';
import { AppFormGroup } from '../../controls/app.formgroup';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppModalContentService } from '../../controls/ngbd-modal-content/app.modal.content.service';
import { FormGroup, FormBuilder } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.editor.component.html',
  styleUrls: ['./subject.editor.component.css']
})
export class SubjectEditorComponent implements OnInit {

  form: FormGroup;
  subject: Subject;
  isNew: boolean;

  constructor(public texts: Texts,
    private route: ActivatedRoute,
    private location: Location,
    private subjectsService: SubjectService,
    private formBuilder: FormBuilder,
    private modalService: AppModalContentService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: '',
      description: ''}
    );
    this.loadSubject();
  }

  save() {
    if (this.isNew) {
      this.subjectsService.create(this.subject).subscribe();
    } else {
      this.subjectsService.update(this.subject).subscribe();
    }
  }

  // TODO make the styled warning
  reset() {
    const me = this;
    if (this.form.dirty) {
      this.modalService.openWarning('Warning',
        'Are you sure you want to Reset?<br>The changes will not be saved!',
        'Reset',
        () => {
          me.form.reset();
          this.loadSubject();
        });
    }
  }

  // TODO add routing guard if changes wil be lost
  back() {
    this.location.back();
  }

  private loadSubject() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.subjectsService.getEntity(id).subscribe(subject => {
        this.subject = subject;
        this.form.setValue({
          name: this.subject.name,
          description: this.subject.description
        });
      });
      this.isNew = false;
    } else {
      this.subject = new Subject();
      this.isNew = true;
    }
  }
}
