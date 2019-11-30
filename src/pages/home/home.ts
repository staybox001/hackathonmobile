import { IMotorista } from './../../interfaces/IMotorista';
import { UsuariosProvider } from './../../providers/usuarios/usuarios';
import { GeolocationProvider } from './../../providers/geolocation/geolocation';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // motorista = { nome:'jon', img_motorista:''};
  nome = localStorage.getItem("nome");
  img = 'http://jondev.website/storage/'+localStorage.getItem("img");
  // img = 'http://localhost:8000/storage/'+localStorage.getItem("img");
  veiculo = localStorage.getItem("veiculo");


  localizacao = { latitude: null, longitude: null };
  constructor(public navCtrl: NavController, private geolocation: Geolocation, public geolocationProvider: GeolocationProvider, public usuarioProvider: UsuariosProvider) {
    setInterval(()=>{
      this.enviaLocalizacao();
    },300000); // a cada 5 min
  }

  ionViewDidLoad() {
    // testar funcionamento
    console.log(this.veiculo);
  }
  enviaLocalizacao() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.localizacao['latitude'] = resp.coords.latitude;
      this.localizacao['longitude'] = resp.coords.longitude;
      this.localizacao['veiculos_id'] = this.veiculo;
      this.geolocationProvider.addGeolocation(this.localizacao).subscribe(res => {
        console.log(res);
      }, erro => {
        console.log("erro:" + erro.message);
      }); // subscribe vai retornar um erro

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }



}
