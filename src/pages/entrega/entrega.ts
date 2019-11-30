import { EntregaDetalhePage } from './../entrega-detalhe/entrega-detalhe';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-entrega',
  templateUrl: 'entrega.html',
})
export class EntregaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntregaPage');
  }
  abreDetalheDeEntrega(){
    this.navCtrl.push(EntregaDetalhePage);
  }
}
