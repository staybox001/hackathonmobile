import { IVeiculo } from './IVeiculo'; // é preciso sempre exportar o import

export interface IManutencao{
    id?: number,
    estabelecimento: string,
    servico: string,
    data: string,
    valor_manutencao: number,
    veiculo_id?: number,
}
