import { Service } from '@angular/core';
import { Injectable, signal } from '@angular/core'

@Service()
export class TrainerService {
    private registry = signal([
        {
      name: 'Roxanne',
      badge: 'Stone',
      location: 'Rustboro City',
      type: 'Rock',
      color: '#B8A038',
      team: [
        { name: 'Geodude', level: 14 },
        { name: 'Geodude', level: 14 },
        { name: 'Nosepass', level: 15 }
      ],
      motto: 'The Rock-Using Student'
    },
    {
      name: 'Brawly',
      badge: 'Knuckle',
      location: 'Dewford Town',
      type: 'Fighting',
      color: '#C03028',
      team: [
        { name: 'Machop', level: 16 },
        { name: 'Meditite', level: 16 },
        { name: 'Makuhita', level: 19 }
      ],      motto: 'A Big Wave in Fighting!'
    },
    {
      name: 'Wattson',
      badge: 'Dynamo',
      location: 'Mauville City',
      type: 'Electric',
      color: '#F8D030',
      team: [
        { name: 'Voltorb', level: 20 },
        { name: 'Electrike', level: 20 },
        { name: 'Magneton', level: 22 },
        { name: 'Manectric', level: 24 }
      ],
      motto: 'The Swell Shocking Guy!'
    },
    {
      name: 'Flannery',
      badge: 'Heat',
      location: 'Lavaridge Town',
      type: 'Fire',
      color: '#F08030',
      team: [
        { name: 'Numel', level: 24 },
        { name: 'Slugma', level: 24 },
        { name: 'Camerupt', level: 26 },
        { name: 'Torkoal', level: 29 }
      ],
      motto: 'One With a Passion That Burns!'
    },
    {
      name: 'Norman',
      badge: 'Balance',
      location: 'Petalburg City',
      type: 'Normal',
      color: '#A8A878',
      team: [
        { name: 'Spinda', level: 27 },
        { name: 'Vigoroth', level: 27 },
        { name: 'Linoone', level: 29 },
        { name: 'Slaking', level: 31 }
      ],
      motto: 'A Man in Pursuit of Power!'
    },
    {
      name: 'Winona',
      badge: 'Feather',
      location: 'Fortree City',
      type: 'Flying',
      color: '#A890F0',
      team: [
        { name: 'Swablu', level: 29 },
        { name: 'Tropius', level: 29 },
        { name: 'Pelipper', level: 30 },
        { name: 'Skarmory', level: 31 },
        { name: 'Altaria', level: 33 }
      ],
      motto: 'The Bird User Taking to the Skies!'
    },
    {
      name: 'Tate & Liza',
      badge: 'Mind',
      location: 'Mossdeep City',
      type: 'Psychic',
      color: '#F85888',
      team: [
        { name: 'Claydol', level: 41 },
        { name: 'Xatu', level: 41 },
        { name: 'Lunatone', level: 42 },
        { name: 'Solrock', level: 42 }
      ],
      motto: 'The Mystic Combination!'
    },
    {
      name: 'Wallace',
      badge: 'Rain',
      location: 'Sootopolis City',
      type: 'Water',
      color: '#6890F0',
      team: [
        { name: 'Luvdisc', level: 40 },
        { name: 'Whiscash', level: 42 },
        { name: 'Sealeo', level: 40 },
        { name: 'Crawdaunt', level: 42 },
        { name: 'Milotic', level: 43 }
      ],
      motto: 'An Artist Who Loves Water!'
    }
    ]);
    
    trainers = this.registry.asReadonly()
}
  