import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BookingOrder } from './bookingorder';
import { BookingService } from './buchungsservice';

@Component({
  selector: 'app-booking',
  imports: [ReactiveFormsModule, MatInputModule, MatSelectModule, MatCardModule, MatButtonModule],
  templateUrl: './booking.html',
  styleUrl: './booking.css'
})
export class Booking {

  bookingForm: FormGroup;

  constructor(private fb: FormBuilder, private bookingService: BookingService) {
    this.bookingForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      checkInDate: [null, Validators.required],
      checkOutDate: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      this.bookingService.addBooking(this.bookingForm.value);
      // Feedback an den Nutzer, Formular zurücksetzen etc.
    }
  }



}
