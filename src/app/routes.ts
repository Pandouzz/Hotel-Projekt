import { Routes } from '@angular/router';
import { Home } from "./home/home";
import { Details } from './details/details';
import { Booking } from './booking/booking';
import { CreateRoom } from './create-room/create-room';
import { Allrooms } from './roomsite/allrooms';
import { Impressum } from './impressum/impressum';
import { Aboutus } from './aboutus/aboutus';
import { Bookingapproval } from './booking/bookingapproval';

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
        path: 'allrooms',
        component: Allrooms
    },
    {
        path: 'details/:roomNumber',
        component: Details
    },
    {
        path: 'booking/:roomNumber',
        component: Booking
    },
    {
        path: 'create-room',
        component: CreateRoom
    },
        {
        path: 'bookingapproval/:roomNumber',
        component: Bookingapproval
    },

    {
        path: 'impressum',
        component: Impressum
    },
    {
        path: 'aboutus',
        component: Aboutus,
    }
]