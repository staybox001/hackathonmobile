import { HomePage } from './../home/home';
import { AbastecimentosProvider } from './../../providers/abastecimentos/abastecimentos';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { IAbastecimento } from '../../interfaces/IAbastecimento';
// import { TesteProvider } from '../../providers/teste/teste';

@IonicPage()
@Component({
  selector: 'page-abastecimento',
  templateUrl: 'abastecimento.html',
})
export class AbastecimentoPage {
  postos:any;

  abastecimento: IAbastecimento = { litros_abastecidos: null, km_abastecimento: null, data: '', postos_id: null, valor:null, veiculos_id: null }

  constructor(public navCtrl: NavController, public navParams: NavParams, public abastecimentoProvider: AbastecimentosProvider,public toastCtrl: ToastController) {
    this.abastecimentoProvider.getPostosCombustivel().subscribe(res => {
      this.postos = res;
      console.log(this.postos);
    }, erro => {
      console.log("erro" + erro.message);
    });
  }
 


  addAbastecida() {
    this.abastecimentoProvider.addAbastecida(this.abastecimento).subscribe(res => {
      this.exibeMensagem('top', 'Salvo com sucesso!');
      console.log(res);
      this.navCtrl.setRoot(HomePage);
    }, erro => {
      this.exibeMensagem('bottom', 'Erro! Tente novamente');
      console.log("erro:" + erro.message);
    }); // subscribe vai retornar um erro
  }

  voltar(){
    this.navCtrl.setRoot(HomePage);
  }

  exibeMensagem(position: string, msg:string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

}
