import { Component, inject } from '@angular/core';
import { Overview } from "../overview/overview";
import { Room } from '../room';
import { Roomservice } from '../roomservice';

@Component({
  selector: 'app-home',
  imports: [Overview],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  rooms: Room [] = [];
  roomService: Roomservice = inject(Roomservice);

  constructor(){
    this.rooms = this.roomService.getRooms();
  }
}
