import { Component } from '@angular/core';
import { KantoComponent } from './kanto/kanto'; 
import { JohtoComponent } from './johto/johto';
import { HoennComponent } from './hoenn/hoenn';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, RouterOutlet, KantoComponent, JohtoComponent, HoennComponent, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}