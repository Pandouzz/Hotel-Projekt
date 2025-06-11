import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Room } from '../room';
import { Roomservice } from '../roomservice';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [MatCardModule, MatButtonModule, CommonModule, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  selectedRoom: Room | undefined;
  roomService: Roomservice = inject(Roomservice);

  constructor() {
    this.selectedRoom = this.roomService.getRoomByNumber(Number(this.route.snapshot.paramMap.get('roomNumber')));
  }
}
