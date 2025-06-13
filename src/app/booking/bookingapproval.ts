import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { BookingOrder } from './bookingorder';
import { BookingService } from './buchungsservice';
import { Roomservice } from '../roomservice';
import { Room } from '../room';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';





@Component({
  selector: 'app-booking',
  imports: [ReactiveFormsModule, MatInputModule, MatSelectModule, MatCardModule, MatButtonModule, CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './bookingapproval.html',
  styleUrl: './booking.css'
})
export class Bookingapproval  {

  selectedRoom: Room | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private roomService: Roomservice  ) {
    this.selectedRoom = this.roomService.getRoomByNumber(Number(this.route.snapshot.params['roomNumber']));
    
  }

  ngOnInit() {
    // Hole die Zimmernummer aus der Route, z.B. /booking/101
    const roomNumber = Number(this.route.snapshot.paramMap.get('id'));
    if (roomNumber) {
      this.selectedRoom = this.roomService.getRoomByNumber(roomNumber);
    }
  }
    



}
