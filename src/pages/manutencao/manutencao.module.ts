import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManutencaoPage } from './manutencao';

@NgModule({
  declarations: [
    ManutencaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ManutencaoPage),
  ],
})
export class ManutencaoPageModule {}
