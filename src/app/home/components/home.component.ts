import {Component, ViewEncapsulation} from '@angular/core';
import {HomeService} from '../services/home.service';
import {IExamInterface, IActivity} from '../models/home.model';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: [
        '../../../assets/css/home/home.css'
    ],
    encapsulation: ViewEncapsulation.None,
    imports: [
        CommonModule
    ]
})

export class HomeComponent {
    public exam: IExamInterface | null = null;
    public activities!: IActivity[];

    constructor(
        public HomeService: HomeService,
        public Router: Router,
        ) { }

    ngOnInit() {
        this.HomeService.getActiveExam().subscribe((response: any) => {
            if (response.success) {
                this.exam = response.data[0];
                this.activities = response.data[0]['activities'];
            }
        });
    }

    proceedToExamination(activity_id: number) {
        this.Router.navigate(['/examination', activity_id]);
    }
}
