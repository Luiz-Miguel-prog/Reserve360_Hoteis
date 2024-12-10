import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComentarPageRoutingModule } from './comentar-routing.module';

import { ComentarPage } from './comentar.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ComentarPageRoutingModule
  ],
  declarations: [ComentarPage]
})
export class ComentarPageModule {}
