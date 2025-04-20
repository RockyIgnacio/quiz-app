import {HomeComponent} from '../components/home.component';
import {RouterModule} from '@angular/router';

export const HomeRoutes = RouterModule.forChild([
    {
        path: '',
        component: HomeComponent,
    }
]);
