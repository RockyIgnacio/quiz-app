import {
    Input,
    Output,
    Component,
    EventEmitter,
    ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'question',
    templateUrl: './question.component.html',
    styleUrls: [
        '../../../assets/css/question/question.css'
    ],
    encapsulation: ViewEncapsulation.None,
    imports: [
        CommonModule
    ]
})

export class QuestionComponent {
    public activity_id!: string;
    @Input() active_question : any;
    @Output() onAnswer = new EventEmitter();
    constructor(private sanitizer: DomSanitizer) {}

    ngOnInit() {
    }

    public parseQuestion(str: string) {
        if (!str) return '';

        const replaced = str.replace(/\*(.*?)\*/g, '<span>$1</span>');
        return this.sanitizer.bypassSecurityTrustHtml(replaced);
    }

    public selectAnswer(answer: any) {
        this.onAnswer.emit(answer);
    }
}
