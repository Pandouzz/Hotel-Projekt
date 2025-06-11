import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Overview } from "../overview/overview";
import { Room } from '../room';
import { Roomservice } from '../roomservice';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule, Overview],
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
