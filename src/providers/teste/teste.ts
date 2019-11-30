import { IManutencao } from './../../interfaces/IManutencao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class TesteProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TesteProvider Provider');
  }
  // allTeste(){
  //   return this.http.get<IManutencao[]>('http://localhost:3000/manutencoes');
  // }

  // showTeste(data:ICurso){
  //   return this.http.get<ICurso>('http://localhost:3000/cursos/'+data.id);
  // }

  // addTeste(data:ICurso){
  //   return this.http.post<ICurso>('http://localhost:3000/cursos',data);
  // }

  // editTeste(data:ICurso){
  //   return this.http.put<ICurso>('http://localhost:3000/cursos/'+data.id,data);
  // }

  // deleteTeste(data:ICurso){
  //   return this.http.delete<ICurso>('http://localhost:3000/cursos/'+data.id);
  // }


 
  
}
