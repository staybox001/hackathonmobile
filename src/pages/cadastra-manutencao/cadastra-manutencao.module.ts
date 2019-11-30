import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastraManutencaoPage } from './cadastra-manutencao';

@NgModule({
  declarations: [
    CadastraManutencaoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastraManutencaoPage),
  ],
})
export class CadastraManutencaoPageModule {}
