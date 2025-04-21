import {Component, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import {ExaminationService} from '../services/examination.service';
import {CommonModule} from '@angular/common';
import {QuestionComponent} from './question.component';
import {ResultComponent} from './result.component';
import {ExaminationModel} from '../models/examination.model';

@Component({
    selector: 'examination',
    templateUrl: './examination.component.html',
    styleUrls: [
        '../../../assets/css/examination/examination.css'
    ],
    encapsulation: ViewEncapsulation.None,
    imports: [
        QuestionComponent,
        ResultComponent,
        CommonModule
    ]
})

export class ExaminationComponent {
    public question_rounds!: any;
    public questions: any;
    public active_round: any;
    public active_question: any;
    public round_step: number = 0;
    public question_step: number = 0;
    public activity_id: number = 0;
    public show_results: boolean = false;
    public show_next_round_btn: boolean = false;
    public show_question: boolean = true;
    
    constructor(
        private ExaminationService: ExaminationService,
        private ExaminationModel: ExaminationModel,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.activity_id = parseInt(this.route.snapshot.paramMap.get('activity_id') ?? '') || 0;
        // this.ExaminationService.getActivityQuestionsById(this.activity_id).subscribe((response: any) => {
        //     if (response.success) {
        //         this.question_rounds = response.data;
        //         this.active_round = this.question_rounds[this.round_step];
        //         this.questions = this.active_round['questions'];
        //         this.active_question = this.questions[this.question_step];
        //     }
        // });
        const response = this.ExaminationService.getActivityQuestionsById(this.activity_id);
        if (response) {
            this.question_rounds = response.data;
            this.active_round = this.question_rounds[this.round_step];
            this.questions = this.active_round['questions'];
            this.active_question = this.questions[this.question_step];
        }
    }

    public onAnswer(answer: any) {
        answer['question_number'] = this.active_question.order;
        this.ExaminationModel.activeRound = this.active_round.order;
        this.ExaminationModel.updateAnswers(answer);

        this.question_step += 1;
        if (this.question_step < this.questions.length) {
            this.active_question = this.questions[this.question_step];
        } else {
            this.ExaminationModel.updateResults({activity_number: this.active_round.order}, {round_number: this.active_round.order});
            this.round_step += 1;
            if (this.question_rounds[this.round_step]) {
                this.show_next_round_btn = true;
                this.active_round = this.question_rounds[this.round_step];
            } else {
                this.show_results = true;
            }
            this.show_question = false;
        }
    }

    public activateNextRound() {
        this.question_step = 0;
        this.active_round = this.question_rounds[this.round_step];
        this.questions = this.active_round['questions'];
        this.active_question = this.questions[this.question_step];
        this.show_question = true;
        this.show_next_round_btn = false;

    }
}
