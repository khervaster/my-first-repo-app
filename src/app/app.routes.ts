import { Routes } from '@angular/router';
import { Home } from './home/home';
import { JohtoComponent } from './johto/johto';
import { KantoComponent } from './kanto/kanto';
import { HoennComponent } from './hoenn/hoenn';


export const routes: Routes = [


 { path: 'home', component: Home },
 { path: 'johto', component: JohtoComponent },
 { path: 'kanto', component: KantoComponent },
 { path: 'hoenn', component: HoennComponent},
 { path: '', redirectTo: 'home', pathMatch: 'full' }


];

