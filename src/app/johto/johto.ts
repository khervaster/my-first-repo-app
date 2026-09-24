import { Component, signal } from '@angular/core';
import { GymLeader } from '../models/gym-leader.model';
import { GymCardComponent } from '../gym-card/gym-card';

@Component({
  selector: 'app-johto',
  standalone: true,
  imports: [GymCardComponent],
  templateUrl: './johto.html',
  styleUrl: './johto.css'
})
export class JohtoComponent {
  johtoLeaders = signal<GymLeader[]>([
    { name: 'Falkner', badge: 'Zephyr', location: 'Violet City', 
      type: ' Flying', 
      color: '#A890F0', 
      team: [{ name: 'Pidgey', level: 9 }, { name: 'Pidgeotto', level: 13 }],
      motto: 'The Elegant Master of Flying Pokémon',},
      

    { name: 'Bugsy', 
      badge: 'Hive', 
      location: 'Azalea Town', 
      type: ' Bug', color: '#A8B820', 
      team: [{ name: 'Metapod', level: 14 }, { name: 'Kakuna', level: 14 }, { name: 'Scyther', level: 17 }],
      motto: 'The Walking Bug Pokémon Encyclopedia'},

    { name: 'Whitney',
      badge: 'Plain', 
      location: 'Goldenrod City', 
      type: 'Normal', color: '#A8A878', 
      team: [{ name: 'Clefairy', level: 18 }, { name: 'Miltank', level: 20 }],
      motto: 'The Incredibly Pretty Girl!'},
      
    { name: 'Morty', badge: 'Fog', location: 'Ecruteak City', type: 'Ghost', color: '#705898', team: [{ name: 'Gastly', level: 21 }, { name: 'Haunter', level: 21 }, { name: 'Haunter', level: 23 }, { name: 'Gengar', level: 25 }],
    motto: 'The Mystic Seer of the Future' },

    { name: 'Chuck', badge: 'Storm', location: 'Cianwood City', type: 'Fighting', color: '#C03028', team: [{ name: 'Primeape', level: 27 }, { name: 'Poliwrath', level: 31 }],
    motto: 'His Raging Fists Will Shatter Rocks' },

    { name: 'Jasmine', badge: 'Mineral', location: 'Olivine City', type: 'Steel', color: '#80808f', team: [{ name: 'Magnemite', level: 30 }, { name: 'Magnemite', level: 30 }, { name: 'Steelix', level: 35 }],
    motto: 'The Steel-Clad Defensive Girl' },

    { name: 'Pryce', badge: 'Glacier', location: 'Mahogany Town', type: 'Ice', color: '#5ca8a8', team: [{ name: 'Seel', level: 27 }, { name: 'Dewgong', level: 29 }, { name: 'Piloswine', level: 31 }],
    motto: 'The Winter Trainer" / "A Trainer with a Winter Soul' },

    { name: 'Clair', badge: 'Rising', location: 'Blackthorn City', type: 'Dragon', color: '#7038F8', team: [{ name: 'Dragonair', level: 37 }, { name: 'Dragonair', level: 37 }, { name: 'Dragonair', level: 37 }, { name: 'Kingdra', level: 41 }],
    motto: 'The Blessed User of Dragon Pokémon' }

  ]);
}