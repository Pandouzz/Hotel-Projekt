import { Injectable } from '@angular/core';
import { Room, RoomType, ViewType } from './room';

@Injectable({
  providedIn: 'root'
})
export class Roomservice {
  rooms: Room [] = [];

  constructor() { 
    this.rooms = [
      {
          title: 'Einzelzimmer Basic',
          roomNumber: 101,
          roomType: RoomType.SINGLE,
          size: 18,
          view: ViewType.CITY_VIEW,
          price: 85,
          numberOfBeds: 1,
          wifi: true,
          airConditioning: false,
          tv: true,
          minibar: false,
          balcony: false,
          description: 'Ein gemütliches Einzelzimmer mit Blick auf die Stadt. Ideal für Geschäftsreisende oder Alleinreisende.',
          photo: 'assets/images/einzelzimmer_basic.jpg'
      },
      {
          title: 'Einzelzimmer Comfort',
          roomNumber: 203,
          roomType: RoomType.SINGLE,
          size: 20,
          view: ViewType.GARDEN_VIEW,
          price: 95,
          numberOfBeds: 1,
          wifi: true,
          airConditioning: true,
          tv: true,
          minibar: false,
          balcony: false,
          description: 'Ruhiges Einzelzimmer mit Blick in den Garten, ideal für Erholungssuchende.',
          photo: 'assets/images/einzelzimmer_comfort.jpg'
      },
      {
          title: 'Einzelzimmer Deluxe',
          roomNumber: 205,
          roomType: RoomType.SINGLE,
          size: 25,
          view: ViewType.SEA_VIEW,
          price: 120,
          numberOfBeds: 1,
          wifi: true,
          airConditioning: true,
          tv: true,
          minibar: true,
          balcony: true,
          description: 'Ein elegantes Einzelzimmer mit Meerblick. Perfekt für einen entspannten Aufenthalt am Strand.',
          photo: 'assets/images/einzelzimmer_deluxe.jpg'
      },
      {
          title: 'Doppelzimmer Basic',
          roomNumber: 302,
          roomType: RoomType.DOUBLE,
          size: 28,
          view: ViewType.GARDEN_VIEW,
          price: 140,
          numberOfBeds: 2,
          wifi: true,
          airConditioning: true,
          tv: true,
          minibar: false,
          balcony: false,
          description: 'Komfortables Doppelzimmer mit Blick in den Garten, perfekt für Paare.',
          photo: 'assets/images/doppelzimmer_basic.jpg'
      },
    {
          title: 'Doppelzimmer Comfort',
          roomNumber: 315,
          roomType: RoomType.DOUBLE,
          size: 30,
          view: ViewType.CITY_VIEW,
          price: 160,
          numberOfBeds: 2,
          wifi: true,
          airConditioning: true,
          tv: true,
          minibar: true,
          balcony: false,
          description: 'Doppelzimmer mit Blick auf die Stadt, inklusive Minibar und Klimaanlage.',
          photo: 'assets/images/doppelzimmer_comfort.jpg'
      },
      {
          title: 'Doppelzimmer Deluxe',
          roomNumber: 401,
          roomType: RoomType.DOUBLE,
          size: 32,
          view: ViewType.SEA_VIEW,
          price: 180,
          numberOfBeds: 2,
          wifi: true,
          airConditioning: true,
          tv: true,
          minibar: true,
          balcony: true,
          description: 'Modernes Doppelzimmer mit herrlichem Meerblick, Balkon und Minibar.',
          photo: 'assets/images/doppelzimmer_deluxe.jpg'
      },
      {
          title: 'Suite Basic',
          roomNumber: 501,
          roomType: RoomType.SUITE,
          size: 45,
          view: ViewType.GARDEN_VIEW,
          price: 280,
          numberOfBeds: 4,
          wifi: true,
          airConditioning: true,
          tv: true,
          minibar: true,
          balcony: true,
          description: 'Großzügige Suite mit Gartenblick, Balkon und Platz für die ganze Familie.',
          photo: 'assets/images/suite_basic.jpg'
      },
      {
          title: 'Suite Comfort',
          roomNumber: 502,
          roomType: RoomType.SUITE,
          size: 48,
          view: ViewType.CITY_VIEW,
          price: 300,
          numberOfBeds: 4,
          wifi: true,
          airConditioning: true,
          tv: true,
          minibar: true,
          balcony: true,
          description: 'Elegante Suite mit Blick auf die Stadt, großem Balkon und viel Komfort.',
          photo: 'assets/images/suite_comfort.jpg'
      },
      {
          title: 'Suite Deluxe',
          roomNumber: 601,
          roomType: RoomType.SUITE,
          size: 55,
          view: ViewType.SEA_VIEW,
          price: 350,
          numberOfBeds: 4,
          wifi: true,
          airConditioning: true,
          tv: true,
          minibar: true,
          balcony: true,
          description: 'Luxuriöse Suite mit Meerblick, großem Balkon und exklusiver Ausstattung.',
          photo: 'assets/images/suite_deluxe.jpg'
      }
    ]
  }

  getRooms(): Room[]{
    return this.rooms;
  }

  getRoomByNumber(roomNumber: number): Room | undefined {
    return this.rooms.find(room => room.roomNumber === roomNumber);
}
}
