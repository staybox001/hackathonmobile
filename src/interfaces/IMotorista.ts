import { IVeiculo } from "./IVeiculo";

export interface IMotorista {
    id?:number,
    nome?:string,
    senha_motorista?:string,
    cpf?:string,
    telefone?:number,
    cidade?:string,
    endereco?:string,
    img_motorista?: string,
    email?: string,
    veiculo_id?: number

}