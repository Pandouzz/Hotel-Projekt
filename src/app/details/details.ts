import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../room';
import { Roomservice } from '../roomservice';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
}
