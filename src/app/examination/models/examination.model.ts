import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ExaminationModel
{
    private $answers: any;
    public activeActivity: any;
    public activeRound: any;
    private $results: any;

    constructor() {
        this.$answers = new BehaviorSubject<Array<any>>([]);
        this.$results = new BehaviorSubject<Array<any>>([]);
    }

    public subscribeAnswers(cb: CallableFunction) {
        return this.$answers.subscribe((answers: []) => {
            cb(answers);
        });
    }

    public subscribeResults(cb: CallableFunction) {
        return this.$results.subscribe((results: []) => {
            cb(results);
        });
    }

    public updateAnswers(answers: any) {
        let current_answers = this.$answers.getValue();
        if (!current_answers[this.activeRound]) {
            current_answers[this.activeRound] = [];
        }
        current_answers[this.activeRound].push(answers);
        this.$answers.next(current_answers);
    }

    public getAnswers() {
        return this.$answers.getValue();
    }

    public clearAnswers() {
        this.$answers.next([]);
    }

    public updateResults(activity: any, round: any) {
        let current_results = this.$results.getValue();
        let current_answers = this.$answers.getValue();

        if (!current_results[activity.activity_number]) {
            current_results[activity.activity_number] = [];
        }

        if (!current_results[activity.activity_number][round.round_number]) {
            current_results[activity.activity_number][round.round_number] = [];
        }

        current_results[activity.activity_number][round.round_number] = current_answers;
        this.$results.next(current_results);
    }

    public getResults() {
        return this.$results.getValue();
    }

    public clearResults() {
        this.$results.next([]);
    }

}