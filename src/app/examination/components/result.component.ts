import {Component, Input, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExaminationModel} from '../models/examination.model';
import {Router} from '@angular/router';

@Component({
    selector: 'result',
    templateUrl: './result.component.html',
    styleUrls: [
        '../../../assets/css/result/result.css'
    ],
    encapsulation: ViewEncapsulation.None,
    imports: [
        CommonModule
    ]
})

export class ResultComponent {
    @Input() activity_number : any;
    @Input() round_number : any;
    public results: any;

    constructor(
        private ExaminationModel: ExaminationModel,
        public Router: Router
    ) {}

    ngOnInit() {
        const all_results = this.ExaminationModel.getResults();
        this.results = all_results[this.activity_number][this.round_number];
        this.results = this.results.filter((item: any) => item);
    }

    public backToHomePage() {
        this.ExaminationModel.clearAnswers();
        this.ExaminationModel.clearResults();
        this.Router.navigate(['/']);
    }

}
