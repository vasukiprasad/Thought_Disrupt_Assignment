import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { ProductsComponent } from './products/products.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent  },
  { path: 'products', component: ProductsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact',  component: ContactComponent  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

