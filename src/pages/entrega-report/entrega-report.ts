import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the EntregaReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entrega-report',
  templateUrl: 'entrega-report.html',
})
export class EntregaReportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntregaReportPage');
  }
  radioAlert() {
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
