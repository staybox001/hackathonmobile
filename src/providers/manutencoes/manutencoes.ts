import { IManutencao } from './../../interfaces/IManutencao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuariosProvider } from './../../providers/usuarios/usuarios';


@Injectable()
export class ManutencoesProvider {

  //url: string = "http://localhost:8000/api/";
  url: string = "http://jondev.website/api/";
  data: any;
  teste:any;
  //busca no storage todos os dados do usuario logado e retorna o valor na varial veiculo
  veiculo = this.usuarioProvider.getStorage("Usuario").then((veiculo) => {
    //seta somente o valor do veiculo_id na variavel veiculo
    this.veiculo = veiculo.veiculo_id;
    return this.veiculo;
  });
  veiculos_id = localStorage.getItem("veiculo");
  

  constructor(public http: HttpClient, public usuarioProvider: UsuariosProvider) {
    
  }
  addManutencao(data: IManutencao) {
    data['veiculo_id'] = this.veiculo;
    return this.http.post<IManutencao>(this.url + 'manutencao', data);

  }
  allManutencao(){
    // this.teste = localStorage.getItem("veiculos_id");
    // let testeInt = this.teste.parseInt();
    console.log(this.veiculos_id);
    return this.http.get(this.url+'manutencoes/'+ this.veiculos_id );
  }
}
