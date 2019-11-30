import { HomePage } from './../home/home';
import { UsuariosProvider } from './../../providers/usuarios/usuarios';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IMotorista } from '../../interfaces/IMotorista';
import { stringify } from '@angular/compiler/src/util';
import { ToastController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
// screen orientation
// import { ScreenOrientation } from '@ionic-native/screen-orientation';




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario: IMotorista = { cpf: '', senha_motorista: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuariosProvider: UsuariosProvider, public toastCtrl: ToastController, public menuCtrl: MenuController) {
  }

  //controle de menus
  ativaMenuAutenticado(){
    this.menuCtrl.enable(true, 'usuarioComLogin');
    this.menuCtrl.enable(false, 'usuarioSemLogin');
  }


  loginUsuario() {
    this.usuariosProvider.loginUsuario(this.usuario).subscribe(res => {
      if (res) {
        if (res.cpf) {
          this.usuariosProvider.setStorage("Usuario", res);
          localStorage.setItem("nome", res.nome);
          localStorage.setItem("img", res.img_motorista);
          // testar funcionamento com localStorage JS
          let veiculo = res.veiculo_id;
          let veiculos_id = veiculo.toString();

          localStorage.setItem("veiculo", veiculos_id);
          this.ativaMenuAutenticado();
          this.navCtrl.setRoot(HomePage);
          console.log(res);
          this.exibeMensagem('top', 'Logado com sucesso!');
        } else {
          console.log(res); //validacao
        }
      } else {
        console.log("Erro no login");//login com erro
      }

    }, erro => {
      console.log("erro:" + erro.message);
      this.exibeMensagem('bottom', 'Login inválido!');

    }); // subscribe vai retornar um erro
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


