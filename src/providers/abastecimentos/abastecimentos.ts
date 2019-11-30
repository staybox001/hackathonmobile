import { IAbastecimento } from './../../interfaces/IAbastecimento';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuariosProvider } from '../usuarios/usuarios';

@Injectable()
export class AbastecimentosProvider {

  // url: string = "http://localhost:8000/api/";
  url: string = "http://jondev.website/api/";
  
  // modelo headers
  headers:any;

  //busca no storage todos os dados do usuario logado e retorna o valor na varial veiculo
  veiculo = this.usuarioProvider.getStorage("Usuario").then((veiculo) => {
    //seta somente o valor do veiculo_id na variavel veiculo
    this.veiculo = veiculo.veiculo_id;
    return this.veiculo;
  });

  constructor(public http: HttpClient, public usuarioProvider: UsuariosProvider) {
    console.log('Hello AbastecimentosProvider Provider');
  }

  //add abastecimento
  addAbastecida(data:IAbastecimento){
    data['veiculos_id'] = this.veiculo;
    console.log(this.veiculo);
      return this.http.post<IAbastecimento>(this.url +'abastecimento', data);
    }

    getPostosCombustivel(){
      return this.http.get(this.url+'postos');
    }

}
