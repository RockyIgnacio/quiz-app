import {HomeService} from './services/home.service';
import {HomeRoutes} from './configs/home.routes';
import {HomeComponent} from './components/home.component';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [
        HomeRoutes,
        HomeComponent,
    ],
    providers: [
        HomeService,
    ],
})

export class HomeModule { }
