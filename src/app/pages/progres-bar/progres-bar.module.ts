import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgresBarPageRoutingModule } from './progres-bar-routing.module';

import { ProgresBarPage } from './progres-bar.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgresBarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProgresBarPage]
})
export class ProgresBarPageModule {}
