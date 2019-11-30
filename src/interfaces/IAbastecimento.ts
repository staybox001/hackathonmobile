import { IVeiculo } from './IVeiculo';
import { IMotorista } from './IMotorista';

export interface IAbastecimento {
    id?: number,
    litros_abastecidos: number,
    km_abastecimento: number,
    data: string,
    valor:number,
    postos_id: number,
    veiculos_id?: number,
}