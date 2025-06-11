import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Room } from '../room';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview',
  imports: [MatCardModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './overview.html',
  styleUrl: './overview.css'
})
export class Overview {
  @Input() rooms!: Room;
}

