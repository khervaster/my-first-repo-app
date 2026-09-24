import { Component, input, output, signal } from '@angular/core';
import { GymLeader } from '../models/gym-leader.model';


@Component({
  selector: 'app-gym-card',
  standalone: true, 
  imports: [],
  templateUrl: './gym-card.html',
  styleUrl: './gym-card.css'
})
export class GymCardComponent { 
  leader = input.required<GymLeader>();

showMotto = signal(false);

showMono() {
  this.showMotto.set(true);
}
}