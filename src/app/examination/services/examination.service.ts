import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable()
export class ExaminationService {

    private activityOne = {"success":true,"data":[{"question_round_id":1,"activity_id":1,"round_title":"Round 1","order":1,"questions":[{"question_round_id":1,"question_id":1,"stimulus":"Watching films at home is *more cheaper* than at the cinema.","order":1,"answers":[{"answer_id":1,"question_id":1,"answer":"Correct","is_correct":0},{"answer_id":2,"question_id":1,"answer":"Incorrect","is_correct":1}]},{"question_round_id":1,"question_id":2,"stimulus":"On the one hand, small cameras are comfortable. *In the other hand*, larger ones take better photos.","order":2,"answers":[{"answer_id":3,"question_id":2,"answer":"Correct","is_correct":0},{"answer_id":4,"question_id":2,"answer":"Incorrect","is_correct":1}]}]}]};
    private activityTwo = {"success":true,"data":[{"question_round_id":2,"activity_id":2,"round_title":"Round 1","order":1,"questions":[{"question_round_id":2,"question_id":3,"stimulus":"Watching films at home is *more cheaper* than at the cinema.","order":1,"answers":[{"answer_id":9,"question_id":3,"answer":"Correct","is_correct":0},{"answer_id":10,"question_id":3,"answer":"Incorrect","is_correct":1}]},{"question_round_id":2,"question_id":4,"stimulus":"On the one hand, small cameras are comfortable. *In the other hand*, larger ones take better photos.","order":2,"answers":[{"answer_id":11,"question_id":4,"answer":"Correct","is_correct":0},{"answer_id":12,"question_id":4,"answer":"Incorrect","is_correct":1}]}]},{"question_round_id":3,"activity_id":2,"round_title":"Round 2","order":2,"questions":[{"question_round_id":3,"question_id":5,"stimulus":"I can\u0027t go out because I *haven\u0027t finished* my homework yet.","order":1,"answers":[{"answer_id":13,"question_id":5,"answer":"Correct","is_correct":1},{"answer_id":14,"question_id":5,"answer":"Incorrect","is_correct":0}]},{"question_round_id":3,"question_id":6,"stimulus":"My friend *like listening* to songs in English","order":2,"answers":[{"answer_id":15,"question_id":6,"answer":"Correct","is_correct":0},{"answer_id":16,"question_id":6,"answer":"Incorrect","is_correct":1}]}]}]};
    
    constructor(
        private Http: HttpClient
    ) {
    }

    public getActivityQuestionsById(activity_id: number) {
        // const quiz_api_url = environment.quiz_api_url + '/get-activity-questions/' + activity_id;
        // return this.Http.get(quiz_api_url);

        let returnData = null;
        switch (activity_id) {
            case 1:
                returnData = this.activityOne
                break;
            case 2:
                returnData = this.activityTwo
                break;
            default:
                break;
        }
        return returnData;
    }
}
