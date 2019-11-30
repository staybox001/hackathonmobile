import { EntregaReportPage } from './../entrega-report/entrega-report';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-entrega-detalhe',
  templateUrl: 'entrega-detalhe.html',
})
export class EntregaDetalhePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntregaDetalhePage');
  }
  abreReportarEntrega() {
    this.navCtrl.push(EntregaReportPage);
  }

  reportar() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Reportar');
    alert.addInput(
      {
        type: 'radio',
        label: 'Desintário não encontrado',
        value: 'Desintário não encontrado',
        checked: false
      }
    );
    alert.addInput(
      {
        type: 'radio',
        label: 'Produto estraviado',
        value: 'Produto estraviado',
        checked: false
      }
    );

    alert.addInput(
      {
        type: 'radio',
        label: 'Dados inválidos',
        value: 'Dados inválidos',
        checked: false
      }
    );
    alert.addInput(
      {
        type: 'radio',
        label: 'Outros',
        value: 'Outros',
        checked: false
      }
    );

    alert.addButton("Cancelar");

    alert.addButton({
      text: 'OK',
      handler: (data: any) => {
        console.log('Motivo selecionado', data);

      }
    });

    alert.present();
  }
}
