import { Geolocation } from '@ionic-native/geolocation';
import { CadastraManutencaoPage } from './../pages/cadastra-manutencao/cadastra-manutencao';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DiarioPage } from '../pages/diario/diario';
import { AbastecimentoPage } from '../pages/abastecimento/abastecimento';
import { ManutencaoPage } from '../pages/manutencao/manutencao';
import { LoginPage } from '../pages/login/login';
// screen orientation
//import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { HttpClientModule } from '@angular/common/http';
import { TesteProvider } from '../providers/teste/teste';
import { DetalheManutencaoPage } from '../pages/detalhe-manutencao/detalhe-manutencao';
import { UsuariosProvider } from '../providers/usuarios/usuarios';
import { AbastecimentosProvider } from '../providers/abastecimentos/abastecimentos';
import { ManutencoesProvider } from '../providers/manutencoes/manutencoes';
import { DiarioProvider } from '../providers/diario/diario';
import { GeolocationProvider } from '../providers/geolocation/geolocation';
import { EntregaPage } from '../pages/entrega/entrega';
import { EntregaDetalhePage } from '../pages/entrega-detalhe/entrega-detalhe';
import { EntregaReportPage } from '../pages/entrega-report/entrega-report';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DiarioPage,
    AbastecimentoPage,
    LoginPage,
    ManutencaoPage,
    DetalheManutencaoPage,
    CadastraManutencaoPage,
    EntregaDetalhePage,
    EntregaPage,
    EntregaReportPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DiarioPage,
    AbastecimentoPage,
    LoginPage,
    ManutencaoPage,
    DetalheManutencaoPage,
    CadastraManutencaoPage,
    EntregaPage,
    EntregaDetalhePage,
    EntregaReportPage

  ],
  providers: [
    //ScreenOrientation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TesteProvider,
    UsuariosProvider,
    AbastecimentosProvider,
    ManutencoesProvider,
    DiarioProvider,
    Geolocation,
    GeolocationProvider,
    EntregaDetalhePage,
    EntregaReportPage


  ]
})
export class AppModule {}
