import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
    title = 'PracticeAngular';

    @Input() heroTitle: string;
    @Output() eventVariable: EventEmitter<string> = new EventEmitter<string>();

    data() {
        this.eventVariable.emit('New Test Title')
    }
}