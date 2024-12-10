import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JalapaoPageRoutingModule } from './jalapao-routing.module';

import { JalapaoPage } from './jalapao.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    JalapaoPageRoutingModule
  ],
  declarations: [JalapaoPage]
})
export class JalapaoPageModule {}
