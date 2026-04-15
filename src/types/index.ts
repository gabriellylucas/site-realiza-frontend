export type TipoEquipamento = 'ABT' | 'ACF' | 'ABTS' | 'AT' | 'KIT_PICK_UP';

export interface Equipamento {
  tipo: TipoEquipamento;
  litragem: number;
  quantidade: number;
  observacao?: string;
}

export const VALOR_POR_KG = 3960;
export const DOSAGEM_PADRAO_G_L = 0.5;