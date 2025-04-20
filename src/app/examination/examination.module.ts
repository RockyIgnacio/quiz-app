import {ExaminationService} from './services/examination.service';
import {ExaminationRoutes} from './configs/examination.routes';
import {ExaminationComponent} from './components/examination.component';
import {ExaminationModel} from './models/examination.model';

import {NgModule} from '@angular/core';

@NgModule({
    imports: [
        ExaminationRoutes,
        ExaminationComponent,
    ],
    providers: [
        ExaminationService,
        ExaminationModel
    ],
})

export class ExaminationModule { }
