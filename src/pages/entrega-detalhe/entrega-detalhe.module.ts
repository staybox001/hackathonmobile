import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntregaDetalhePage } from './entrega-detalhe';

@NgModule({
  declarations: [
    EntregaDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(EntregaDetalhePage),
  ],
})
export class EntregaDetalhePageModule {}
