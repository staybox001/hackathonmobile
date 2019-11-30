import { StatusBar } from '@ionic-native/status-bar';
import { CadastraManutencaoPage } from './../cadastra-manutencao/cadastra-manutencao';
import { IManutencao } from './../../interfaces/IManutencao';
import { DetalheManutencaoPage } from './../detalhe-manutencao/detalhe-manutencao';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, Item } from 'ionic-angular';
import { ManutencoesProvider } from './../../providers/manutencoes/manutencoes';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';



@IonicPage()
@Component({
  selector: 'page-manutencao',
  templateUrl: 'manutencao.html',
})
export class ManutencaoPage {

  lista: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public manutencoesProvider: ManutencoesProvider, public http: HttpClientModule, public usuarioProvider: UsuariosProvider) {
    // listando manutencoes
    this.manutencoesProvider.allManutencao().subscribe(res => {
      this.lista = res;
      console.log(this.lista);
    }, erro => {
      console.log("erro" + erro.message);
    });
  }

  ionViewDidEnter() {
  }

  abreDetalheManutencao(item) {
    this.navCtrl.push(DetalheManutencaoPage, { dados: item });
  }

  abreCadastraManutencao() {
    this.navCtrl.push(CadastraManutencaoPage);
  }

}
