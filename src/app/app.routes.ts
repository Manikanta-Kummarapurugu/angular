import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: DashboardComponent },
            { path: "login", redirectTo: "/", pathMatch: "full" },




            { path: "**", component: PagenotfoundComponent },
        ]
    }
];
