import { HomePage } from './../home/home';
import { HttpClientModule } from '@angular/common/http';
import { DiarioProvider } from './../../providers/diario/diario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { IDiario } from '../../interfaces/IDiario';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-diario',
  templateUrl: 'diario.html',
})
export class DiarioPage {
  selectOptions : any;
  km_inicial:number;
  diario: IDiario = {data:'', km_inicial:null, km_final:null, destino:'' };


  constructor(public navParams: NavParams, public diarioProvider: DiarioProvider, public http: HttpClientModule, public navCtrl: NavController, private storage: Storage, public toastCtrl: ToastController) {
  }

  
  addDiario(){
    this.diarioProvider.addDiario(this.diario).subscribe(res => {
      this.exibeMensagem('top', 'Salvo com sucesso!');
      console.log(res);
      this.navCtrl.setRoot(HomePage);
    }, erro => {
      this.exibeMensagem('bottom', 'Erro ao salvar! Tente novamente.');
      console.log("erro: " + erro.message);
    }); // subscribe vai retornar um erro
    this.removeLocalStorage();
  }

  ionViewDidLoad() {
    // verificando se o usuario salvou algum dado nos campos e retornando se sim
    this.storage.get('data').then((val) => {
      if (val) {
        this.diario.data = val;
      }else{
        this.diario.data = null;
      }
    });
    this.storage.get('km_inicial').then((val) => {
      if (val) {
        this.diario.km_inicial = val;
      }else{
        this.diario.km_inicial = null;
      }
    });
    this.storage.get('destino').then((val) => {
      if (val) {
        this.diario.destino = val;
      }else{
        this.diario.destino = null;
      }
    });
    this.storage.get('km_final').then((val) => {
      if (val) {
        this.diario.km_final = val;
      }else{
        this.diario.km_final = null;
      }
    });

    this.selectOptions = {
      title : 'Cidades Destino',
      subTitle : 'Selecione as cidades do seu destino:',
      mode : 'ios'
    };
  }

  voltar(){
    this.navCtrl.setRoot(HomePage);
  }
  //salvando dados do input para o usuario
  salvaLocalStorage(){
    this.storage.set("km_inicial", this.diario.km_inicial);
    this.storage.set("data", this.diario.data);
    this.storage.set("destino", this.diario.destino);
    this.storage.set("km_final", this.diario.km_final);
  }
  // function para remover campos salvos do storage
  removeLocalStorage(){
    this.storage.remove("km_inicial");
    this.storage.remove("data");
    this.storage.remove("destino");
    this.storage.remove("km_final");
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
