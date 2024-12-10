import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscreverPageRoutingModule } from './inscrever-routing.module';

import { InscreverPage } from './inscrever.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscreverPageRoutingModule
  ],
  declarations: [InscreverPage]
})
export class InscreverPageModule {}
