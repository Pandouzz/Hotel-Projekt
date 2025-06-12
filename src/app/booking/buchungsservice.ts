import { Injectable } from '@angular/core';
import { BookingOrder } from './bookingorder';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookings: BookingOrder[] = [];

  addBooking(order: BookingOrder) {
    this.bookings.push(order);
    // Hier könntest du z.B. auch einen HTTP-Request an ein Backend senden
  }

  getBookings(): BookingOrder[] {
    return this.bookings;
  }
}