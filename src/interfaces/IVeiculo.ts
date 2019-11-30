export interface IVeiculo{
id: number,
marca: string,
modelo: string,
placa: string,
renavam: number,
ano: number,
km_atual: number,
situacao:["EM CIRCULAÇÃO", "EM MANUTENÇÃO"],
img_veiculo: any,

}