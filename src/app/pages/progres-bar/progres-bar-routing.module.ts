import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgresBarPage } from './progres-bar.page';

const routes: Routes = [
  {
    path: '',
    component: ProgresBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgresBarPageRoutingModule {}
