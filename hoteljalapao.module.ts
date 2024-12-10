import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoteljalapaoPageRoutingModule } from './hoteljalapao-routing.module';

import { HoteljalapaoPage } from './hoteljalapao.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    HoteljalapaoPageRoutingModule
  ],
  declarations: [HoteljalapaoPage]
})
export class HoteljalapaoPageModule {}
