import { Component, inject } from '@angular/core';
import { Roomservice } from '../roomservice';
import { Room, RoomType, ViewType } from '../room';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create-room',
  imports: [MatInputModule, MatSelectModule, ReactiveFormsModule, RouterLink, MatCheckboxModule, MatButtonModule],
  templateUrl: './create-room.html',
  styleUrl: './create-room.css'
})
export class CreateRoom {
  roomService = inject(Roomservice);
  roomTypes = Object.values(RoomType);
  viewTypes = Object.values(ViewType);

  roomForm = new FormGroup({
    title: new FormControl(''),
    roomNumber: new FormControl(''),
    roomType: new FormControl(''),
    size: new FormControl(''),
    view: new FormControl(''),
    price: new FormControl(''),
    numberOfBeds: new FormControl(''),
    description: new FormControl(''),
    wifi: new FormControl(false),
    airConditioning: new FormControl(false),
    tv: new FormControl(false),
    minibar: new FormControl(false),
    balcony: new FormControl(false)
  });
  selectedRoomType: RoomType = RoomType.SINGLE;
  selectedView: ViewType = ViewType.SEA_VIEW;

  saveNewRoom() {
    if (this.roomForm.invalid) {
      console.error('Form is invalid');
      return;
    }
    let newRoom: Room = {
      title: this.roomForm.value.title ?? '',
      roomNumber: Number(this.roomForm.value.roomNumber ?? 0),
      size: Number(this.roomForm.value.size ?? 0),
      price: Number(this.roomForm.value.price ?? 0),
      numberOfBeds: Number(this.roomForm.value.numberOfBeds ?? 0),
      description: this.roomForm.value.description ?? '',
      wifi: this.roomForm.value.wifi ?? false,
      airConditioning: this.roomForm.value.airConditioning ?? false,
      tv: this.roomForm.value.tv ?? false,
      minibar: this.roomForm.value.minibar ?? false,
      balcony: this.roomForm.value.balcony ?? false,
      roomType: this.selectedRoomType,
      view: this.selectedView,
      photo: 'default_room.jpg'
    };

    this.roomService.addRoom(newRoom);
  }
}
