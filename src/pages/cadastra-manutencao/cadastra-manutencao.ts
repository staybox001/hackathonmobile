import { ManutencaoPage } from './../manutencao/manutencao';
import { IManutencao } from './../../interfaces/IManutencao';
import { ManutencoesProvider } from './../../providers/manutencoes/manutencoes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-cadastra-manutencao',
  templateUrl: 'cadastra-manutencao.html',
})
export class CadastraManutencaoPage {

  

  manutencao: IManutencao = { estabelecimento: '', servico: '', data: '', valor_manutencao: null, veiculo_id: null };

  constructor(public navCtrl: NavController, public navParams: NavParams, public manutencoesProvider: ManutencoesProvider, public toastCtrl: ToastController ) {
  }


 

  addManutencao() {
    this.manutencoesProvider.addManutencao(this.manutencao).subscribe(res => {
      this.exibeMensagem('top', 'Salvo com sucesso!');
      console.log(res);
      this.navCtrl.setRoot(ManutencaoPage);
    }, erro => {
      this.exibeMensagem('bottom', 'Erro ao salvar! Tente novamente.');

      console.log("erro:" + erro.message);
    }); // subscribe vai retornar um erro
  }
  voltar(){
    this.navCtrl.setRoot(ManutencaoPage);
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
