import { Directive, OnChanges, SimpleChange, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appSdAttr]'
})
export class SdAttrDirective implements OnChanges {

    constructor(private element: ElementRef) {}

    @Input()
    appSdAttr;

    ngOnChanges(changes: {[property: string]: SimpleChange}) {
        const change = changes['appSdAttr'];
        const classList = this.element.nativeElement.classList;
        if (!change.firstChange && classList.contains(change.previousValue)) {
            classList.remove(change.previousValue);
        }
        if (!classList.contains(change.currentValue)) {
            classList.add(change.currentValue);
        }
    }
}
