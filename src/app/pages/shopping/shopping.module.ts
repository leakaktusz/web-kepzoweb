import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    ShoppingComponent
  
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,

    FlexLayoutModule
    
  ]
})
export class ShoppingModule { }
