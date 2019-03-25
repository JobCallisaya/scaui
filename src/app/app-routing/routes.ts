import {Routes} from '@angular/router';

import {AccidenteComponent} from '../accidente/accidente.component';
import {HomeComponent} from '../home/home.component';
import {ContactComponent} from '../contact/contact.component';
import {ItemDetailComponent} from '../item-detail/item-detail.component';
import {AboutComponent} from '../about/about.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'catalog', component: AccidenteComponent},
  {path: 'contactus', component: ContactComponent},
  {path: 'aboutus', component: AboutComponent},
  {path: 'itemdetail/:id', component: ItemDetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
