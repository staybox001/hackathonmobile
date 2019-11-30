import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheManutencaoPage } from './detalhe-manutencao';

@NgModule({
  declarations: [
    DetalheManutencaoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheManutencaoPage),
  ],
})
export class DetalheManutencaoPageModule {}
