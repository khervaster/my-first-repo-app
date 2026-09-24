import { Component, signal } from '@angular/core';
import { GymLeader } from '../models/gym-leader.model';
import { GymCardComponent } from '../gym-card/gym-card';

@Component({
  selector: 'app-kanto',
  standalone: true,
  imports: [GymCardComponent],
  templateUrl: './kanto.html',
  styleUrl: './kanto.css'
})
export class KantoComponent {
  kantoLeaders = signal<GymLeader[]>([
    { name: 'Brock', badge: 'Boulder', location: 'Pewter City', type: 'Rock', color: '#42372f', team: [{ name: 'Geodude', level: 12 }, { name: 'Onix', level: 14 }],
    motto: 'Rock-hard Pokémon Trainer', },

    { name: 'Misty', badge: 'Cascade', location: 'Cerulean City', type: 'Water', color: '#6890F0', team: [{ name: 'Staryu', level: 18 }, { name: 'Starmie', level: 21 }],
    motto: 'Tomboyish Mermaid!',  },

    { name: 'Lt. Surge', badge: 'Thunder', location: 'Vermilion City', type: 'Electric', color: '#d2b953', team: [{ name: 'Voltorb', level: 21 }, { name: 'Pikachu', level: 18 }, { name: 'Raichu', level: 24 }],
      motto: 'Lightning American!', },

    { name: 'Erika', badge: 'Rainbow', location: 'Celadon City', type: 'Grass', color: '#78C850', team: [{ name: 'Victreebel', level: 29 }, { name: 'Tangela', level: 24 }, { name: 'Vileplume', level: 29 }],
    motto: 'Nature-Loving Princess',  },

    { name: 'Koga', badge: 'Soul', location: 'Fuchsia City', type: 'Poison', color: '#A040A0', team: [{ name: 'Koffing', level: 37 }, { name: 'Muk', level: 39 }, { name: 'Koffing', level: 37 }, { name: 'Weezing', level: 43 }],
    motto: 'Poison-nuking Ninja Master',  },

    { name: 'Sabrina', badge: 'Marsh', location: 'Saffron City', type: 'Psychic', color: '#e24a78', team: [{ name: 'Kadabra', level: 38 }, { name: 'Mr. Mime', level: 37 }, { name: 'Venomoth', level: 38 }, { name: 'Alakazam', level: 43 }],
    motto: 'Master of Psychic Pokémon!',  },

    { name: 'Blaine', badge: 'Volcano', location: 'Cinnabar Island', type: 'Fire', color: '#F08030', team: [{ name: 'Growlithe', level: 42 }, { name: 'Ponyta', level: 40 }, { name: 'Rapidash', level: 42 }, { name: 'Arcanine', level: 47 }],
    motto: 'Hotheaded Quiz Master',  },

    { name: 'Giovanni', badge: 'Earth', location: 'Viridian City', type: 'Ground', color: '#E0C068', team: [{ name: 'Rhyhorn', level: 45 }, { name: 'Dugtrio', level: 42 }, { name: 'Nidoqueen', level: 44 }, { name: 'Nidoking', level: 45 }, { name: 'Rhydon', level: 50 }],
    motto: 'Team Rocket!', 
   }
  ]);
}
