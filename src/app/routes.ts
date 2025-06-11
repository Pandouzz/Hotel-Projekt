import { Routes } from '@angular/router';
import { Home } from "./home/home";
import { Details } from './details/details';
import { Booking } from './booking/booking';

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
    },
    {
        path: '/booking/:roomNumber',
        component: Booking
    }
]