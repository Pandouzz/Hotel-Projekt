import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Room } from '../room';
import { Roomservice } from '../roomservice';
import { Overview } from '../overview/overview';

@Component({
  selector: 'app-allrooms',
  imports: [RouterLink, Overview],
  templateUrl: './allrooms.html',
  styleUrl: './allrooms.css'
})
export class Allrooms {
    rooms: Room [] = [];
  roomService: Roomservice = inject(Roomservice);

  constructor(){
    this.rooms = this.roomService.getRooms();
  }

  getRoomByName(name: string){
    this.rooms = this.roomService.getRoomByName(name);
  }
}
