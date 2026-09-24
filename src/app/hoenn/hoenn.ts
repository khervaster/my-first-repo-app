import { Component, inject, signal } from '@angular/core';
import { GymLeader } from '../models/gym-leader.model';
import { GymCardComponent } from '../gym-card/gym-card';
import { TrainerService } from '../trainer-service';

@Component({ 
  selector: 'app-hoenn',
  standalone: true,
  imports: [GymCardComponent],
  templateUrl: './hoenn.html',
  styleUrl: './hoenn.css'
})
export class HoennComponent {
  trainerService = inject(TrainerService)
}
