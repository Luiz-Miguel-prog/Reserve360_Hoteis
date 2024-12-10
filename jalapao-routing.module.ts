import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JalapaoPage } from './jalapao.page';

const routes: Routes = [
  {
    path: '',
    component: JalapaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JalapaoPageRoutingModule {}
