import {RouterModule} from '@angular/router';

export const AppRoutes = RouterModule.forRoot([
    {
        path: '',
        children: [
            {
                path: '',
                loadChildren: () => import('app/home/home.module').then((m) => m.HomeModule),
            },
            {
                path: 'examination/:activity_id',
                loadChildren: () => import('app/examination/examination.module').then((m) => m.ExaminationModule),
            },
        ],
    },
], {});
