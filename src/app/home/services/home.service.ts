import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable()
export class HomeService {

    constructor(
        private Http: HttpClient
    ) {}

    public getActiveExam() {
        const quiz_api_url = environment.quiz_api_url + '/get-exam-activities';
        return this.Http.get(quiz_api_url);
    }
}
