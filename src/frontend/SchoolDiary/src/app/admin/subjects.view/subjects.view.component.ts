import { Component, OnInit } from '@angular/core';
import { Subject } from '../../domain/subject/model/subject';
import { Texts } from '../admin.module.texts';
import { SubjectService } from '../../domain/subject/service/subject.service';

@Component({
  selector: 'app-subjects.view',
  templateUrl: './subjects.view.component.html',
  styleUrls: ['./subjects.view.component.css']
})
export class SubjectsViewComponent implements OnInit {

  subjects: Subject[] = [];

  constructor(public texts: Texts,
    private subjectsService: SubjectService) { }

  ngOnInit() {
    this.loadSubjects();
  }

  loadSubjects() {
    // TODO add paging
    this.subjectsService.getEntities().subscribe(subjects => this.subjects = subjects);
  }

  // TODO add warning, question "Are you sure...?"
  // TODO use ID
  remove(index: number) {
  }
}
