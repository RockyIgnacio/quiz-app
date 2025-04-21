import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable()
export class HomeService {

    private return = {"success":true,"data":[{"exam_id":1,"exam_name":"Error Find","heading":"This game teaches you to find mistakes in written text.","activities":[{"activity_id":1,"activity_name":"Activity One","order":1},{"activity_id":2,"activity_name":"Activity Two","order":2}]}]};

    constructor(
        private Http: HttpClient
    ) {}

    public getActiveExam() {
        const quiz_api_url = environment.quiz_api_url + '/get-exam-activities';
        // return this.Http.get(quiz_api_url);
        return this.return;
    }
}
