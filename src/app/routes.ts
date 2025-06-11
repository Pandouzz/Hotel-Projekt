import { Routes } from '@angular/router';
import { Home } from "./home/home";
import { Details } from './details/details';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'details/:roomNumber',
        component: Details
    }
]