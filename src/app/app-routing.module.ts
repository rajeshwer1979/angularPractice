import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import {RouterModule} from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ProductService } from './shared/services/product.service';


export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent},
  { path: 'detail/:id', component: ProductDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [], 
  imports: [RouterModule.forRoot(appRoutes), CommonModule],
  exports: [RouterModule],
  providers: [ProductService]
})
export class AppRoutingModule { }
