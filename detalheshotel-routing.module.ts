import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheshotelPage } from './detalheshotel.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheshotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheshotelPageRoutingModule {}
