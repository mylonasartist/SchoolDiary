import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent } from './ngbd-modal-content.component';

@Injectable()
export class AppModalContentService {

    constructor(private modalService: NgbModal) { }

    openWarning(title: string, message: string, buttonText: string, callback: () => void) {
        const modalRef = this.modalService.open(NgbdModalContentComponent);
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.buttonText = buttonText;
        modalRef.componentInstance.isWarning = true;
        modalRef.result.then((result) => {
            callback();
        }, (reason) => {
            // do nothing
        });
    }
}
