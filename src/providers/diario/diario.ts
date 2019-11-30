import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDiario } from '../../interfaces/IDiario';
import { UsuariosProvider } from './../../providers/usuarios/usuarios';


@Injectable()
export class DiarioProvider {
  // url: string = "http://localhost:8000/api/";
  url: string = "http://jondev.website/api/";

  veiculo = this.usuarioProvider.getStorage("Usuario").then((veiculo) => {
    this.veiculo = veiculo.veiculo_id;
    return this.veiculo;
  });

  motorista = this.usuarioProvider.getStorage("Usuario").then((motorista) => {
    this.motorista = motorista.id;
    console.log(motorista.id);
    return this.motorista;
  });

  constructor(public http: HttpClient, public usuarioProvider: UsuariosProvider) {
    console.log('Hello DiarioProvider Provider');
  }
  // add diario
  addDiario(data: IDiario) {
    data['veiculos_id'] = this.veiculo;
    data['motoristas_id'] = this.motorista;
    console.log(data);
    return this.http.post<IDiario>(this.url + 'diario', data);
  }
}
