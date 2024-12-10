import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheshotelPageRoutingModule } from './detalheshotel-routing.module';

import { DetalheshotelPage } from './detalheshotel.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    DetalheshotelPageRoutingModule
  ],
  declarations: [DetalheshotelPage]
})
export class DetalheshotelPageModule {}
