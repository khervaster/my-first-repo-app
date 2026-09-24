import { Service } from '@angular/core';
import { Injectable, signal } from '@angular/core'

@Service()
export class TrainerService {
    private registry = signal([
        {
            name: 'Ash Ketchum',
            team: ['Pikachu', 'Charizard'],
            items: ['Light Ball', 'Charizardite Y'],
        }
    ]);
    
    trainers = this.registry.asReadonly()
}
  