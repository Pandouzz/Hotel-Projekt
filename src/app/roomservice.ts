import { Injectable } from '@angular/core';
import { Room, RoomType, ViewType } from './room';

@Injectable({
  providedIn: 'root'
})
export class Roomservice {
  rooms: Room [] = [];

  constructor() { 
    this.rooms = [
        // Einzelzimmer - Budget
      {
          title: 'Einzelzimmer Standard',
          roomNumber: 101,
          roomType: RoomType.SINGLE,
          size: 18,
          view: ViewType.CITY_VIEW,
          price: 85,
          maxGuests: 1,
          wifi: true,
          airConditioning: false,
          tv: true,
          minibar: false,
          balcony: false
      },

      // Einzelzimmer - Premium
      {
          title: 'Einzelzimmer Premium',
          roomNumber: 205,
          roomType: RoomType.SINGLE,
          size: 22,
          view: ViewType.SEA_VIEW,
          price: 120,
          maxGuests: 1,
          wifi: true,
          airConditioning: true,
          tv: true,
          minibar: true,
          balcony: true
      },

      // Doppelzimmer - Standard
      {
          title: 'Doppelzimmer Standard',
          roomNumber: 302,
          roomType: RoomType.DOUBLE,
          size: 28,
          view: ViewType.GARDEN_VIEW,
          price: 140,
          maxGuests: 2,
          wifi: true,
          airConditioning: true,
          tv: true,
          minibar: false,
          balcony: false
      },

      // Doppelzimmer - Meerblick
      {
          title: 'Doppelzimmer Meerblick',
          roomNumber: 401,
          roomType: RoomType.DOUBLE,
          size: 32,
          view: ViewType.SEA_VIEW,
          price: 180,
          maxGuests: 2,
          wifi: true,
          airConditioning: true,
          tv: true,
          minibar: true,
          balcony: true
      },

      // Doppelzimmer - Stadtblick
      {
          title: 'Doppelzimmer Stadtblick',
          roomNumber: 315,
          roomType: RoomType.DOUBLE,
          size: 30,
          view: ViewType.CITY_VIEW,
          price: 160,
          maxGuests: 2,
          wifi: true,
          airConditioning: true,
          tv: true,
          minibar: true,
          balcony: false
      },

      // Suite - Gartenblick
      {
          title: 'Suite Gartenblick',
          roomNumber: 501,
          roomType: RoomType.SUITE,
          size: 45,
          view: ViewType.GARDEN_VIEW,
          price: 280,
          maxGuests: 4,
          wifi: true,
          airConditioning: true,
          tv: true,
          minibar: true,
          balcony: true
      },

      // Suite - Premium Meerblick
      {
          title: 'Suite Premium',
          roomNumber: 601,
          roomType: RoomType.SUITE,
          size: 55,
          view: ViewType.SEA_VIEW,
          price: 350,
          maxGuests: 4,
          wifi: true,
          airConditioning: true,
          tv: true,
          minibar: true,
          balcony: true
      },

      // Einzelzimmer - Gartenblick
      {
          title: 'Einzelzimmer Gartenblick',
          roomNumber: 203,
          roomType: RoomType.SINGLE,
          size: 20,
          view: ViewType.GARDEN_VIEW,
          price: 95,
          maxGuests: 1,
          wifi: true,
          airConditioning: true,
          tv: true,
          minibar: false,
          balcony: false
      },

      // Doppelzimmer - Budget ohne Klimaanlage
      {
          title: 'Doppelzimmer Standard',
          roomNumber: 102,
          roomType: RoomType.DOUBLE,
          size: 26,
          view: ViewType.CITY_VIEW,
          price: 110,
          maxGuests: 2,
          wifi: true,
          airConditioning: false,
          tv: true,
          minibar: false,
          balcony: false
      },

      // Suite - Stadtblick
      {
          title: 'Suite Stadtblick',
          roomNumber: 502,
          roomType: RoomType.SUITE,
          size: 48,
          view: ViewType.CITY_VIEW,
          price: 300,
          maxGuests: 4,
          wifi: true,
          airConditioning: true,
          tv: true,
          minibar: true,
          balcony: true
      }
    ]
  }

  getRooms(): Room[]{
    return this.rooms;
  }
}
