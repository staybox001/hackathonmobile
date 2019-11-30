import { UsuariosProvider } from './../providers/usuarios/usuarios';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DiarioPage } from '../pages/diario/diario';
import { AbastecimentoPage } from '../pages/abastecimento/abastecimento'
import { ManutencaoPage } from '../pages/manutencao/manutencao';
import { EntregaPage } from '../pages/entrega/entrega';
import { LoginPage } from '../pages/login/login';
import { MenuController } from 'ionic-angular';
import { EntregaDetalhePage } from '../pages/entrega-detalhe/entrega-detalhe';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public usuariosProvider:UsuariosProvider, public menuCtrl: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Diário', component: DiarioPage},
      { title: 'Abastecimentos', component: AbastecimentoPage },
      { title: 'Manutenções', component: ManutencaoPage},
      { title: 'Entregas', component: EntregaPage},
    ];
    
    this.usuariosProvider.getStorage("Usuario").then(usuario => {
      if (usuario) {
        console.log("Usuario logado");
      }else{
        console.log("Usuario não está logado");
      }
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  sair(){
    this.usuariosProvider.setStorage("Usuario", null);
    this.menuCtrl.enable(true, 'usuarioSemLogin');
    this.menuCtrl.enable(false, 'usuarioComLogin');
    this.nav.setRoot(LoginPage);
  }
}
