import { IVeiculo } from './IVeiculo';
import { IMotorista } from './IMotorista';
export interface IDiario {
    id?: number,
    km_inicial: number,
    km_final: number,
    destino: string,
    data: string,
    motoristas_id?:number,
    veiculos_id?:number,
}