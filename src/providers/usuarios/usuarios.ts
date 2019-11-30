import { IMotorista } from './../../interfaces/IMotorista';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class UsuariosProvider {

  // url:string = "http://localhost:8000/api/";
  url: string = "http://jondev.website/api/";

  headers: any;

  constructor(public http: HttpClient, private storage: Storage) {
    this.storage.get('nome').then((val) => {
      if (val) {
        console.log('Nome: ', val);
      }else{
        console.log('Não existe: ', val);
      }
    });

  }

  loginUsuario(data: IMotorista) {
    return this.http.post<IMotorista>(this.url + 'login', data);
  }

  setStorage(chave, valor){
    this.storage.set(chave, valor);
  }
  getStorage(chave){
   return this.storage.get(chave);
  }

}
