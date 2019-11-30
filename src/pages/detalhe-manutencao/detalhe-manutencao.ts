import { IManutencao } from './../../interfaces/IManutencao';
import { ManutencaoPage } from './../manutencao/manutencao';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-detalhe-manutencao',
  templateUrl: 'detalhe-manutencao.html',
})
export class DetalheManutencaoPage {

  item:IManutencao;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('dados');
  }


}
