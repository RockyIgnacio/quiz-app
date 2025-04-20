import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable()
export class ExaminationService {

    constructor(
        private Http: HttpClient
    ) {
    }

    public getActivityQuestionsById(activity_id: number) {
        const quiz_api_url = environment.quiz_api_url + '/get-activity-questions/' + activity_id;
        return this.Http.get(quiz_api_url);
    }
}
